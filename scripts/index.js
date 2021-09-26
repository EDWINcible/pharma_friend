// import moment from "moment";
// var moment = require('moment');  

console.log("index.js in online");
window.ethereum.request({ method: "eth_requestAccounts" });
console.log(window.ethereum.request({ method: "eth_requestAccounts" }))

const web3 = new Web3(window.ethereum);
const address = '0x27B93B8f1102aDb615c8455C2458249ab2000D89';
const abi =   [
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "chemistRecord",
    "outputs": [
      {
        "internalType": "string",
        "name": "dateOfPurchase",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "dosePerDay",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "patientAddr",
        "type": "string"
      },
      {
        "internalType": "int256",
        "name": "personalPrescrNo",
        "type": "int256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "name": "chemistlicenseList",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "name": "doclicenseList",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "prescriptionList",
    "outputs": [
      {
        "internalType": "string",
        "name": "licId",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "reciever",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "docName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "date",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "validity",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "noOfDays",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "docAddr",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "LicId",
        "type": "string"
      }
    ],
    "name": "addDocLic",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_licId",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_docName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "curDate",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "patientAddr",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "validDate",
        "type": "string"
      },
      {
        "internalType": "string[]",
        "name": "_details",
        "type": "string[]"
      },
      {
        "internalType": "string",
        "name": "noOfDays",
        "type": "string"
      }
    ],
    "name": "callWritePrsce",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "patientAddress",
        "type": "string"
      }
    ],
    "name": "viewOnly",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "patientAddress",
        "type": "string"
      }
    ],
    "name": "viewGetPrsecription",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "licId",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "reciever",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "docName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "date",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "validity",
            "type": "string"
          },
          {
            "internalType": "string[]",
            "name": "medicines",
            "type": "string[]"
          },
          {
            "internalType": "string[]",
            "name": "dosage",
            "type": "string[]"
          },
          {
            "internalType": "string[]",
            "name": "lastUsed",
            "type": "string[]"
          },
          {
            "internalType": "string",
            "name": "noOfDays",
            "type": "string"
          }
        ],
        "internalType": "struct SharedStructs.prescriptionPage",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "patientAddress",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "purchaseDate",
        "type": "string"
      }
    ],
    "name": "addLastUsage",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "chemAddr",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "LicId",
        "type": "string"
      }
    ],
    "name": "addChemistLic",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "purchaseDate",
        "type": "string"
      },
      {
        "internalType": "int256",
        "name": "dosePerDay",
        "type": "int256"
      },
      {
        "internalType": "string",
        "name": "patientAddress",
        "type": "string"
      }
    ],
    "name": "enterMedRecord",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "toString",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "toString",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "toString",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "value",
        "type": "bytes32"
      }
    ],
    "name": "toString",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  }
];

var prescription = new web3.eth.Contract(abi, address);

export default new web3.eth.Contract(abi, address);

const accounts = await web3.eth.getAccounts();




async function submitPrescription(event) {
  console.log("Onsubmit");
  event.preventDefault();
  // await prescription.methods.setCheck("Edwin").send({from: accounts[0]});
  // const check= await prescription.methods.getCheck().call();

  // const licId=document.getElementById("myText").value ;
  // const docName=document.getElementById("myText").value ;
  // const curDate=document.getElementById("myText").value ;
  // const patientAddr=document.getElementById("myText").value ;
  // const validDate=document.getElementById("myText").value ;
  var details = [];
  var days = [];
  // const curDate=document.getElementById("myText").value ;

  let length = document.getElementsByClassName("med-name-presc-disp-cl").length;
  for (let i = 0; i < length; i++) {
    details.push(document.getElementsByClassName("med-name-presc-disp-cl")[i].value);
    details.push(document.getElementsByClassName("med-dose-presc-disp-cl")[i].value);
   
    days.push(parseInt(document.getElementsByClassName("med-days-presc-disp-cl")[i].value));
  }
  days.sort().reverse();
  let noOfDays=days[0];
  let d = new Date();
  var dd = String(d.getDate()).padStart(2, '0');
  var mm = String(d.getMonth() + 1).padStart(2, '0'); 
  var yyyy = d.getFullYear();

  let curDate = mm + '/' + dd + '/' + yyyy;

  
  d.setDate(d.getDate() + days[0]);


   dd = String(d.getDate()).padStart(2, '0');
   mm = String(d.getMonth() + 1).padStart(2, '0'); 
   yyyy = d.getFullYear();

  d = mm + '/' + dd + '/' + yyyy;

let licId="444";
let docName="Edwin";
let patientAddr='0xf4b1a2F3e63816c90d2cA87bedd32674913E8296';
// document.getElementById("patientID").value ;
console.log("starting");
try {
  await prescription.methods.addDocLic('0xa207033231BcDD4312c081A1eB84cDf7b8599eCc',"444").send({ from: accounts[0] });  
} catch (error) {
  console.log("1st await");
}

try {
  await prescription.methods.callWritePrsce(licId, docName, curDate, patientAddr,d,details,noOfDays.toString(10)).send({ from: accounts[0] });  
} catch (error) {
  console.log("2nd await");
}
console.log("finished") ;

try {
  const test=await prescription.methods.viewOnly(patientAddr).send({ from: accounts[0] });
  console.log("finished")  
} catch (error) {
  console.log("3rd await");
}

console.log("finished") ;

console.log(test);
}



var form = document.getElementById('create-presc-form');
form.addEventListener('submit', submitPrescription);



 // d=format_Date(d=d);
  // moment(date).format('YYYYMMDD');
  // await prescription.methods.writePrescription(licId,docName,curDate,patientAddr,validDate,details).send({from: accounts[0]});
  // console.log(accounts)


// function format_Date(Date d)
// {
//   var today = date;
//   var dd = today.getDate();
//     var mm = today.getMonth() + 1;
//     var yyyy = today.getFullYear();
//     if (dd < 10) {
//             dd = '0' + dd;
//         }
//         if (mm < 10) {
//             mm = '0' + mm;
//         }
//     var output =  dd + '/' + mm + '/' + yyyy;
//     return output;
// };