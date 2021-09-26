// console.log("index.js in online");
window.ethereum.request({ method: "eth_requestAccounts" });
console.log(window.ethereum.request({ method: "eth_requestAccounts" }))
 
const web3 = new Web3(window.ethereum);
 
// export default web3;

// const address='0x320328AED2B2810AEaE741CD012331340B44d987';
const address='0xADA7ee8A3118db9446E022911955d1De8df35074';
const abi=[
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
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
          "internalType": "address",
          "name": "",
          "type": "address"
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
          "internalType": "address",
          "name": "reciever",
          "type": "address"
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
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "docAddr",
          "type": "address"
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
          "internalType": "string[]",
          "name": "prescDetails",
          "type": "string[]"
        }
      ],
      "name": "medicioneDetailSetter",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "dosePerDay",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "lastValidDate",
              "type": "string"
            }
          ],
          "internalType": "struct SharedStructs.Medicine[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "patientAddress",
          "type": "address"
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
              "internalType": "address",
              "name": "reciever",
              "type": "address"
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
              "components": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "dosePerDay",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "lastValidDate",
                  "type": "string"
                }
              ],
              "internalType": "struct SharedStructs.Medicine[]",
              "name": "medicines",
              "type": "tuple[]"
            },
            {
              "internalType": "string[]",
              "name": "lastUsed",
              "type": "string[]"
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
          "internalType": "address",
          "name": "patientAddress",
          "type": "address"
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
      "inputs": [],
      "name": "getCheck",
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
          "name": "newMname",
          "type": "string"
        }
      ],
      "name": "setCheck",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];

var prescription = new web3.eth.Contract(abi,address);

export default new web3.eth.Contract(abi,address);

const accounts = await web3.eth.getAccounts();
console.log(accounts)

async function submitPrescription(event){
	console.log("Onsubmit");
    event.preventDefault();
      await prescription.methods.setCheck("Edwin").send({
        from: accounts[0]
      });
       const check= await prescription.methods.getCheck().call();
      console.log(check);
  };



var form = document.getElementById('create-presc-form');
form.addEventListener('submit',submitPrescription);