//SPDX-License-Identifier: Unlicense
pragma solidity >=0.7.0 <0.9.0;


library SharedStructs {
    
    //  struct date{
    //     int day;
    //     int month;
    //     int year;
    // }

    struct prescriptionPage{
        string licId;
        string reciever;
        string docName;
        string date;
        string validity;
        string[] medicines; 
        string[] dosage;
        string[] lastUsed; 
        string noOfDays;
    }

    // struct Medicine {
    //     string name;
    //     string dosePerDay;
    //     string noOfDays;
    // }
    
    struct purchaseEntry{
        string dateOfPurchase;
        string dosePerDay;
        string patientAddr;
        int personalPrescrNo;
}
      
}


contract Prescription{
    
    mapping ( string => SharedStructs.prescriptionPage[]) public prescriptionList;
    mapping ( string => string) public doclicenseList;
    mapping ( string => SharedStructs.purchaseEntry[]) public chemistRecord;
    mapping ( string => string) public chemistlicenseList;


    function addDocLic(string memory docAddr,string memory LicId) public{
        
        doclicenseList[docAddr] = LicId;
    }
    
    // Called during Register

    // after doctor clicks on send prescription
    function writePrescription(string memory _licId,string memory _docName,string memory curDate,string memory patientAddr,string memory validDate,string[] memory _details,string memory noOfDays) private {

        SharedStructs.prescriptionPage memory yourPrescription;
        if (bytes(doclicenseList[toString(msg.sender)]).length > 0){
            
            yourPrescription.licId = _licId;
            yourPrescription.reciever = patientAddr;
            yourPrescription.docName = _docName;
            yourPrescription.date = curDate;
            yourPrescription.validity = validDate;
            yourPrescription.noOfDays = noOfDays;
            
            for(uint i=0;i<(_details.length)/2;i++){
            
                yourPrescription.medicines[i] = _details[0];
                yourPrescription.dosage[i] = _details[1];
            
        }
            
            prescriptionList[patientAddr].push(yourPrescription);
            
        }
        
    }
    
    function callWritePrsce(string memory _licId,string memory _docName,string memory curDate,string memory patientAddr,string memory validDate,string[] memory _details,string memory noOfDays) public {
        
        writePrescription(_licId,_docName,curDate,patientAddr,validDate,_details,noOfDays);
        
        
    }
    

    function viewOnly(string memory patientAddress) public returns (string memory){
        
        
        SharedStructs.prescriptionPage memory viewPage= prescriptionList[patientAddress][prescriptionList[patientAddress].length-1];       
        return viewPage.noOfDays;
    }

    function viewGetPrsecription(string memory patientAddress) public returns (SharedStructs.prescriptionPage memory){
         return prescriptionList[patientAddress][prescriptionList[patientAddress].length-1];
    }


    
    // Chemist will add the patient address and the date of purchase
    function addLastUsage(string memory patientAddress,string memory purchaseDate) public{
        
        prescriptionList[patientAddress][prescriptionList[patientAddress].length-1].lastUsed.push(purchaseDate);
    }


// }



// contract Chemist{
    
    // Prescription public = new Prescription();
    
    // Called during chemist sign up
    function addChemistLic(string memory chemAddr,string memory LicId) public{
        chemistlicenseList[chemAddr] = LicId;
    }


    // chemist will call to add record of medicine
    function enterMedRecord(string memory purchaseDate,int dosePerDay,string memory patientAddress) public{
        
        string[] memory cpmed = viewGetPrsecription(patientAddress).medicines;
        string[] memory dosage = viewGetPrsecription(patientAddress).dosage;
        SharedStructs.prescriptionPage memory tempPrescrip;
        tempPrescrip  = viewGetPrsecription(patientAddress);
        
        if (bytes(chemistlicenseList[toString(msg.sender)]).length > 0){
            for(uint i=0;i<viewGetPrsecription(patientAddress).medicines.length;i++){
                
            SharedStructs.purchaseEntry memory curEntry;
            
            curEntry.dateOfPurchase = purchaseDate;
            curEntry.dosePerDay = dosage[i];
            curEntry.personalPrescrNo = int256(cpmed.length-1);
            curEntry.patientAddr = patientAddress;
            
            
            chemistRecord[cpmed[i]].push(curEntry);
            // above line can throw error if key not present check later
            }  
            
            
        }
        prescriptionList[patientAddress][prescriptionList[patientAddress].length-1].lastUsed.push(purchaseDate);
    }
    
    function toString(address account) public pure returns(string memory) {
    return toString(abi.encodePacked(account));
}

function toString(uint256 value) public pure returns(string memory) {
    return toString(abi.encodePacked(value));
}

function toString(bytes32 value) public pure returns(string memory) {
    return toString(abi.encodePacked(value));
}

function toString(bytes memory data) public pure returns(string memory) {
    bytes memory alphabet = "0123456789abcdef";

    bytes memory str = new bytes(2 + data.length * 2);
    str[0] = "0";
    str[1] = "x";
    for (uint i = 0; i < data.length; i++) {
        str[2+i*2] = alphabet[uint(uint8(data[i] >> 4))];
        str[3+i*2] = alphabet[uint(uint8(data[i] & 0x0f))];
    }
    return string(str);
}
    
}
