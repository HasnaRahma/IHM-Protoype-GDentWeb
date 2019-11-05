(function(window, undefined) {
  var dictionary = {
    "778d2193-93db-4a86-ad0f-592aaf71bc66": "viewlist PatientDataGrid",
    "92ae838d-3135-4b47-a6ee-4ef187ea62ef": "view PatientDataGrid",
    "6d2d7ab8-04ab-49f1-83b9-cfd2468fabe8": "viewlist login_1",
    "d59a9587-c981-42a2-a93d-cd5e34dcb3a9": "Medecin3",
    "d69a4cbf-1844-45c3-9db6-887cad5a0d1b": "modify login",
    "c6af2bd8-0711-4b95-89f1-8a9c0036ded7": "view login",
    "8ebd9c72-6050-4337-bf89-2978db6b8cfa": "new PatientDataGrid",
    "6f3e98f0-6f51-40b0-84eb-8e0a743f0c3b": "Medecin2",
    "4ced58b7-bdbc-43a0-bb6b-443b52e00007": "new SoinDataMaster",
    "3b9b988f-6a4e-40e9-b0fd-28bdbe5193e3": "modify SoinDataMaster",
    "1c172a7b-2785-4d33-a1b9-fd5bced26dde": "delete PatientDataGrid",
    "1c4f49c6-a53c-4d15-bb26-529d86cf97d5": "Medecin1",
    "cd84153f-7f6e-479a-92c2-575c656303f6": "modify PatientDataGrid",
    "fd20adf0-5afd-4d50-af13-07534c210383": "new login",
    "e4d54d0e-c142-4798-9b6d-5f8e454cd47b": "ODF",
    "d1980101-0a74-45e0-8bfb-dcd9d9f5b8a6": "Missions",
    "b81af61c-0596-4e8a-b6cc-0b9d0265368a": "viewlist SoinDataMaster",
    "9d1b7a89-43da-48f3-9a62-02728d968463": "page d'acceuil",
    "af92aa72-dca8-41d3-8fd8-7df6685c6618": "view login_1",
    "699d2dd2-f446-420f-98b6-a1763009899b": "delete SoinDataMaster",
    "02e8f840-27b7-4797-b1f5-d637b2e90d79": "InfosGénéral",
    "0447e155-5a47-452b-95d9-5d9daad2ce6e": "Soins",
    "98d9cda0-26f9-4ddd-81be-b6a5c51b0267": "delete login_1",
    "967f078a-a1ed-4ea3-b23b-a865ef80368f": "RDV",
    "8cd12e76-df4a-4aaa-b195-c0e1ca1794ab": "Prothèse",
    "5e679026-c831-4fc9-a5dd-9e8c97172b74": "new login_1",
    "56cc956b-de07-41c2-96f5-64ec7af5467c": "modify login_1",
    "4e0010c3-9d28-46a7-a703-cbdf8ef39aaa": "Contact",
    "5d024353-5558-47f0-81d7-4ee7aa581184": "viewlist login",
    "fbb22a47-2718-49a3-a1e6-f712249f5120": "Propos",
    "162570a7-0558-40f7-824c-e393b1433cb6": "delete login",
    "9bf5b529-8d0e-43fa-bfa8-66b3dc7f6f39": "hhh",
    "e7ba14db-e912-4fe9-b55f-f0b9e60a7ae4": "login",
    "dd729ba7-284d-48ee-a935-6978438cf9ed": "Steps",
    "3a5c717f-0556-445c-8c23-f61248199d0e": "DataGrid",
    "399d47e1-a72d-429a-85a0-332ef814a05c": "New Quote",
    "8cd087ea-a3de-46aa-b850-26cc7631b085": "Quote assignation"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);function initData() {
  jimData.variables["suma"] = "0";
  jimData.variables["date"] = "";
  jimData.variables["gender"] = "";
  jimData.variables["sum"] = "";
  jimData.variables["stomach"] = "";
  jimData.variables["Quotes"] = "";
  jimData.variables["logged employee"] = "";
  jimData.variables["PatientDataGrid"] = "";
  jimData.variables["login"] = "";
  jimData.variables["title"] = "";
  jimData.variables["errorplan1"] = "0";
  jimData.variables["total"] = "";
  jimData.variables["Plans"] = "";
  jimData.variables["rowplans"] = "";
  jimData.variables["contact"] = "";
  jimData.variables["residence"] = "";
  jimData.variables["email"] = "";
  jimData.variables["endocrine"] = "";
  jimData.variables["middle"] = "";
  jimData.variables["breathing"] = "";
  jimData.variables["SoinDataMaster"] = "";
  jimData.variables["heart"] = "";
  jimData.variables["fist name"] = "";
  jimData.variables["nationality"] = "";
  jimData.variables["phone"] = "";
  jimData.variables["tooltip signin"] = "";
  jimData.variables["name"] = "Dr [nom]";
  jimData.variables["employees"] = "";
  jimData.variables["family"] = "";
  jimData.variables["age"] = "";
  jimData.variables["nbr"] = "6";
  jimData.datamasters["SoinDataMaster"] = [
    {
      "id": 1,
      "datamaster": "SoinDataMaster",
      "userdata": {
        "Numéro": "1",
        "Dent": "14",
        "Type Soin": "type1",
        "Acte": "act1",
        "Médecin": "ibtissem",
        "Coût Total": "5000",
        "Versemenet": "4000"
      }
    },
    {
      "id": 2,
      "datamaster": "SoinDataMaster",
      "userdata": {
        "Numéro": "2",
        "Dent": "12",
        "Type Soin": "sample text",
        "Acte": "act2",
        "Médecin": "hanene",
        "Coût Total": "8000",
        "Versemenet": "5000"
      }
    }
  ];

  jimData.datamasters["countryRes"] = [
    {
      "id": 1,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Country of Residence *"
      }
    },
    {
      "id": 2,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Afghanistan"
      }
    },
    {
      "id": 3,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Aland Islands"
      }
    },
    {
      "id": 4,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Albania"
      }
    },
    {
      "id": 5,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Algeria"
      }
    },
    {
      "id": 6,
      "datamaster": "countryRes",
      "userdata": {
        "name": "American Samoa"
      }
    },
    {
      "id": 7,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Andorra"
      }
    },
    {
      "id": 8,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Angola"
      }
    },
    {
      "id": 9,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Anguilla"
      }
    },
    {
      "id": 10,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Antarctica"
      }
    },
    {
      "id": 11,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Antigua And Barbuda"
      }
    },
    {
      "id": 12,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Argentina"
      }
    },
    {
      "id": 13,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Armenia"
      }
    },
    {
      "id": 14,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Aruba"
      }
    },
    {
      "id": 15,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Australia"
      }
    },
    {
      "id": 16,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Austria"
      }
    },
    {
      "id": 17,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Azerbaijan"
      }
    },
    {
      "id": 18,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Bahamas"
      }
    },
    {
      "id": 19,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Bahrain"
      }
    },
    {
      "id": 20,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Bangladesh"
      }
    },
    {
      "id": 21,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Barbados"
      }
    },
    {
      "id": 22,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Belarus"
      }
    },
    {
      "id": 23,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Belgium"
      }
    },
    {
      "id": 24,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Belize"
      }
    },
    {
      "id": 25,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Benin"
      }
    },
    {
      "id": 26,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Bermuda"
      }
    },
    {
      "id": 27,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Bhutan"
      }
    },
    {
      "id": 28,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Bolivia"
      }
    },
    {
      "id": 29,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Bosnia And Herzegovina"
      }
    },
    {
      "id": 30,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Botswana"
      }
    },
    {
      "id": 31,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Bouvet Island"
      }
    },
    {
      "id": 32,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Brazil"
      }
    },
    {
      "id": 33,
      "datamaster": "countryRes",
      "userdata": {
        "name": "British Indian Ocean Territory"
      }
    },
    {
      "id": 34,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Brunei Darussalam"
      }
    },
    {
      "id": 35,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Bulgaria"
      }
    },
    {
      "id": 36,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Burkina Faso"
      }
    },
    {
      "id": 37,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Burundi"
      }
    },
    {
      "id": 38,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Cambodia"
      }
    },
    {
      "id": 39,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Cameroon"
      }
    },
    {
      "id": 40,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Canada"
      }
    },
    {
      "id": 41,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Cape Verde"
      }
    },
    {
      "id": 42,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Cayman Islands"
      }
    },
    {
      "id": 43,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Central African Republic"
      }
    },
    {
      "id": 44,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Chad"
      }
    },
    {
      "id": 45,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Chile"
      }
    },
    {
      "id": 46,
      "datamaster": "countryRes",
      "userdata": {
        "name": "China"
      }
    },
    {
      "id": 47,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Christmas Island"
      }
    },
    {
      "id": 48,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Cocos (Keeling) Islands"
      }
    },
    {
      "id": 49,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Colombia"
      }
    },
    {
      "id": 50,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Comoros"
      }
    },
    {
      "id": 51,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Congo"
      }
    },
    {
      "id": 52,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Congo, The Democratic Republic Of The"
      }
    },
    {
      "id": 53,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Cook Islands"
      }
    },
    {
      "id": 54,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Costa Rica"
      }
    },
    {
      "id": 55,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Cote D'Ivoire"
      }
    },
    {
      "id": 56,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Croatia"
      }
    },
    {
      "id": 57,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Cuba"
      }
    },
    {
      "id": 58,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Cyprus"
      }
    },
    {
      "id": 59,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Czech Republic"
      }
    },
    {
      "id": 60,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Denmark"
      }
    },
    {
      "id": 61,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Djibouti"
      }
    },
    {
      "id": 62,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Dominica"
      }
    },
    {
      "id": 63,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Dominican Republic"
      }
    },
    {
      "id": 64,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Ecuador"
      }
    },
    {
      "id": 65,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Egypt"
      }
    },
    {
      "id": 66,
      "datamaster": "countryRes",
      "userdata": {
        "name": "El Salvador"
      }
    },
    {
      "id": 67,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Equatorial Guinea"
      }
    },
    {
      "id": 68,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Eritrea"
      }
    },
    {
      "id": 69,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Estonia"
      }
    },
    {
      "id": 70,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Ethiopia"
      }
    },
    {
      "id": 71,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Falkland Islands (Malvinas)"
      }
    },
    {
      "id": 72,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Faroe Islands"
      }
    },
    {
      "id": 73,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Fiji"
      }
    },
    {
      "id": 74,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Finland"
      }
    },
    {
      "id": 75,
      "datamaster": "countryRes",
      "userdata": {
        "name": "France"
      }
    },
    {
      "id": 76,
      "datamaster": "countryRes",
      "userdata": {
        "name": "French Guiana"
      }
    },
    {
      "id": 77,
      "datamaster": "countryRes",
      "userdata": {
        "name": "French Polynesia"
      }
    },
    {
      "id": 78,
      "datamaster": "countryRes",
      "userdata": {
        "name": "French Southern Territories"
      }
    },
    {
      "id": 79,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Gabon"
      }
    },
    {
      "id": 80,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Gambia"
      }
    },
    {
      "id": 81,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Georgia"
      }
    },
    {
      "id": 82,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Germany"
      }
    },
    {
      "id": 83,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Ghana"
      }
    },
    {
      "id": 84,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Gibraltar"
      }
    },
    {
      "id": 85,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Greece"
      }
    },
    {
      "id": 86,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Greenland"
      }
    },
    {
      "id": 87,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Grenada"
      }
    },
    {
      "id": 88,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Guadeloupe"
      }
    },
    {
      "id": 89,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Guam"
      }
    },
    {
      "id": 90,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Guatemala"
      }
    },
    {
      "id": 91,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Guernsey"
      }
    },
    {
      "id": 92,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Guinea"
      }
    },
    {
      "id": 93,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Guinea-Bissau"
      }
    },
    {
      "id": 94,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Guyana"
      }
    },
    {
      "id": 95,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Haiti"
      }
    },
    {
      "id": 96,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Heard Island And Mcdonald Islands"
      }
    },
    {
      "id": 97,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Holy See (Vatican City State)"
      }
    },
    {
      "id": 98,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Honduras"
      }
    },
    {
      "id": 99,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Hong Kong"
      }
    },
    {
      "id": 100,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Hungary"
      }
    },
    {
      "id": 101,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Iceland"
      }
    },
    {
      "id": 102,
      "datamaster": "countryRes",
      "userdata": {
        "name": "India"
      }
    },
    {
      "id": 103,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Indonesia"
      }
    },
    {
      "id": 104,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Iran, Islamic Republic Of"
      }
    },
    {
      "id": 105,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Iraq"
      }
    },
    {
      "id": 106,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Ireland"
      }
    },
    {
      "id": 107,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Isle Of Man"
      }
    },
    {
      "id": 108,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Israel"
      }
    },
    {
      "id": 109,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Italy"
      }
    },
    {
      "id": 110,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Jamaica"
      }
    },
    {
      "id": 111,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Japan"
      }
    },
    {
      "id": 112,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Jersey"
      }
    },
    {
      "id": 113,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Jordan"
      }
    },
    {
      "id": 114,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Kazakhstan"
      }
    },
    {
      "id": 115,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Kenya"
      }
    },
    {
      "id": 116,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Kiribati"
      }
    },
    {
      "id": 117,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Korea, Democratic People'S Republic Of"
      }
    },
    {
      "id": 118,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Korea, Republic Of"
      }
    },
    {
      "id": 119,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Kuwait"
      }
    },
    {
      "id": 120,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Kyrgyzstan"
      }
    },
    {
      "id": 121,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Lao People'S Democratic Republic"
      }
    },
    {
      "id": 122,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Latvia"
      }
    },
    {
      "id": 123,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Lebanon"
      }
    },
    {
      "id": 124,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Lesotho"
      }
    },
    {
      "id": 125,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Liberia"
      }
    },
    {
      "id": 126,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Libyan Arab Jamahiriya"
      }
    },
    {
      "id": 127,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Liechtenstein"
      }
    },
    {
      "id": 128,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Lithuania"
      }
    },
    {
      "id": 129,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Luxembourg"
      }
    },
    {
      "id": 130,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Macao"
      }
    },
    {
      "id": 131,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Macedonia, The Former Yugoslav Republic Of"
      }
    },
    {
      "id": 132,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Madagascar"
      }
    },
    {
      "id": 133,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Malawi"
      }
    },
    {
      "id": 134,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Malaysia"
      }
    },
    {
      "id": 135,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Maldives"
      }
    },
    {
      "id": 136,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Mali"
      }
    },
    {
      "id": 137,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Malta"
      }
    },
    {
      "id": 138,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Marshall Islands"
      }
    },
    {
      "id": 139,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Martinique"
      }
    },
    {
      "id": 140,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Mauritania"
      }
    },
    {
      "id": 141,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Mauritius"
      }
    },
    {
      "id": 142,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Mayotte"
      }
    },
    {
      "id": 143,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Mexico"
      }
    },
    {
      "id": 144,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Micronesia, Federated States Of"
      }
    },
    {
      "id": 145,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Moldova, Republic Of"
      }
    },
    {
      "id": 146,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Monaco"
      }
    },
    {
      "id": 147,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Mongolia"
      }
    },
    {
      "id": 148,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Montserrat"
      }
    },
    {
      "id": 149,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Morocco"
      }
    },
    {
      "id": 150,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Mozambique"
      }
    },
    {
      "id": 151,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Myanmar"
      }
    },
    {
      "id": 152,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Namibia"
      }
    },
    {
      "id": 153,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Nauru"
      }
    },
    {
      "id": 154,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Nepal"
      }
    },
    {
      "id": 155,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Netherlands"
      }
    },
    {
      "id": 156,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Netherlands Antilles"
      }
    },
    {
      "id": 157,
      "datamaster": "countryRes",
      "userdata": {
        "name": "New Caledonia"
      }
    },
    {
      "id": 158,
      "datamaster": "countryRes",
      "userdata": {
        "name": "New Zealand"
      }
    },
    {
      "id": 159,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Nicaragua"
      }
    },
    {
      "id": 160,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Niger"
      }
    },
    {
      "id": 161,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Nigeria"
      }
    },
    {
      "id": 162,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Niue"
      }
    },
    {
      "id": 163,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Norfolk Island"
      }
    },
    {
      "id": 164,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Northern Mariana Islands"
      }
    },
    {
      "id": 165,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Norway"
      }
    },
    {
      "id": 166,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Oman"
      }
    },
    {
      "id": 167,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Pakistan"
      }
    },
    {
      "id": 168,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Palau"
      }
    },
    {
      "id": 169,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Palestinian Territory, Occupied"
      }
    },
    {
      "id": 170,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Panama"
      }
    },
    {
      "id": 171,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Papua New Guinea"
      }
    },
    {
      "id": 172,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Paraguay"
      }
    },
    {
      "id": 173,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Peru"
      }
    },
    {
      "id": 174,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Philippines"
      }
    },
    {
      "id": 175,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Pitcairn"
      }
    },
    {
      "id": 176,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Poland"
      }
    },
    {
      "id": 177,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Portugal"
      }
    },
    {
      "id": 178,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Puerto Rico"
      }
    },
    {
      "id": 179,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Qatar"
      }
    },
    {
      "id": 180,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Reunion"
      }
    },
    {
      "id": 181,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Romania"
      }
    },
    {
      "id": 182,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Russian Federation"
      }
    },
    {
      "id": 183,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Rwanda"
      }
    },
    {
      "id": 184,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Saint Helena"
      }
    },
    {
      "id": 185,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Saint Kitts And Nevis"
      }
    },
    {
      "id": 186,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Saint Lucia"
      }
    },
    {
      "id": 187,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Saint Pierre And Miquelon"
      }
    },
    {
      "id": 188,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Saint Vincent And The Grenadines"
      }
    },
    {
      "id": 189,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Samoa"
      }
    },
    {
      "id": 190,
      "datamaster": "countryRes",
      "userdata": {
        "name": "San Marino"
      }
    },
    {
      "id": 191,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Sao Tome And Principe"
      }
    },
    {
      "id": 192,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Saudi Arabia"
      }
    },
    {
      "id": 193,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Senegal"
      }
    },
    {
      "id": 194,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Serbia And Montenegro"
      }
    },
    {
      "id": 195,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Seychelles"
      }
    },
    {
      "id": 196,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Sierra Leone"
      }
    },
    {
      "id": 197,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Singapore"
      }
    },
    {
      "id": 198,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Slovakia"
      }
    },
    {
      "id": 199,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Slovenia"
      }
    },
    {
      "id": 200,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Solomon Islands"
      }
    },
    {
      "id": 201,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Somalia"
      }
    },
    {
      "id": 202,
      "datamaster": "countryRes",
      "userdata": {
        "name": "South Africa"
      }
    },
    {
      "id": 203,
      "datamaster": "countryRes",
      "userdata": {
        "name": "South Georgia And The South Sandwich Islands"
      }
    },
    {
      "id": 204,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Spain"
      }
    },
    {
      "id": 205,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Sri Lanka"
      }
    },
    {
      "id": 206,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Sudan"
      }
    },
    {
      "id": 207,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Suriname"
      }
    },
    {
      "id": 208,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Svalbard And Jan Mayen"
      }
    },
    {
      "id": 209,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Swaziland"
      }
    },
    {
      "id": 210,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Sweden"
      }
    },
    {
      "id": 211,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Switzerland"
      }
    },
    {
      "id": 212,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Syrian Arab Republic"
      }
    },
    {
      "id": 213,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Taiwan, Province Of China"
      }
    },
    {
      "id": 214,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Tajikistan"
      }
    },
    {
      "id": 215,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Tanzania, United Republic Of"
      }
    },
    {
      "id": 216,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Thailand"
      }
    },
    {
      "id": 217,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Timor-Leste"
      }
    },
    {
      "id": 218,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Togo"
      }
    },
    {
      "id": 219,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Tokelau"
      }
    },
    {
      "id": 220,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Tonga"
      }
    },
    {
      "id": 221,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Trinidad And Tobago"
      }
    },
    {
      "id": 222,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Tunisia"
      }
    },
    {
      "id": 223,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Turkey"
      }
    },
    {
      "id": 224,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Turkmenistan"
      }
    },
    {
      "id": 225,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Turks And Caicos Islands"
      }
    },
    {
      "id": 226,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Tuvalu"
      }
    },
    {
      "id": 227,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Uganda"
      }
    },
    {
      "id": 228,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Ukraine"
      }
    },
    {
      "id": 229,
      "datamaster": "countryRes",
      "userdata": {
        "name": "United Arab Emirates"
      }
    },
    {
      "id": 230,
      "datamaster": "countryRes",
      "userdata": {
        "name": "United Kingdom"
      }
    },
    {
      "id": 231,
      "datamaster": "countryRes",
      "userdata": {
        "name": "United States"
      }
    },
    {
      "id": 232,
      "datamaster": "countryRes",
      "userdata": {
        "name": "United States Minor Outlying Islands"
      }
    },
    {
      "id": 233,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Uruguay"
      }
    },
    {
      "id": 234,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Uzbekistan"
      }
    },
    {
      "id": 235,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Vanuatu"
      }
    },
    {
      "id": 236,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Venezuela"
      }
    },
    {
      "id": 237,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Viet Nam"
      }
    },
    {
      "id": 238,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Virgin Islands, British"
      }
    },
    {
      "id": 239,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Virgin Islands, U.S."
      }
    },
    {
      "id": 240,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Wallis And Futuna"
      }
    },
    {
      "id": 241,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Western Sahara"
      }
    },
    {
      "id": 242,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Yemen"
      }
    },
    {
      "id": 243,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Zambia"
      }
    },
    {
      "id": 244,
      "datamaster": "countryRes",
      "userdata": {
        "name": "Zimbabwe"
      }
    },
    {
      "id": 245,
      "datamaster": "countryRes",
      "userdata": {
        "name": "(Not Specified)"
      }
    }
  ];

  jimData.datamasters["country"] = [
    {
      "id": 1,
      "datamaster": "country",
      "userdata": {
        "name": "Nationality *"
      }
    },
    {
      "id": 2,
      "datamaster": "country",
      "userdata": {
        "name": "Afghanistan"
      }
    },
    {
      "id": 3,
      "datamaster": "country",
      "userdata": {
        "name": "Aland Islands"
      }
    },
    {
      "id": 4,
      "datamaster": "country",
      "userdata": {
        "name": "Albania"
      }
    },
    {
      "id": 5,
      "datamaster": "country",
      "userdata": {
        "name": "Algeria"
      }
    },
    {
      "id": 6,
      "datamaster": "country",
      "userdata": {
        "name": "American Samoa"
      }
    },
    {
      "id": 7,
      "datamaster": "country",
      "userdata": {
        "name": "Andorra"
      }
    },
    {
      "id": 8,
      "datamaster": "country",
      "userdata": {
        "name": "Angola"
      }
    },
    {
      "id": 9,
      "datamaster": "country",
      "userdata": {
        "name": "Anguilla"
      }
    },
    {
      "id": 10,
      "datamaster": "country",
      "userdata": {
        "name": "Antarctica"
      }
    },
    {
      "id": 11,
      "datamaster": "country",
      "userdata": {
        "name": "Antigua And Barbuda"
      }
    },
    {
      "id": 12,
      "datamaster": "country",
      "userdata": {
        "name": "Argentina"
      }
    },
    {
      "id": 13,
      "datamaster": "country",
      "userdata": {
        "name": "Armenia"
      }
    },
    {
      "id": 14,
      "datamaster": "country",
      "userdata": {
        "name": "Aruba"
      }
    },
    {
      "id": 15,
      "datamaster": "country",
      "userdata": {
        "name": "Australia"
      }
    },
    {
      "id": 16,
      "datamaster": "country",
      "userdata": {
        "name": "Austria"
      }
    },
    {
      "id": 17,
      "datamaster": "country",
      "userdata": {
        "name": "Azerbaijan"
      }
    },
    {
      "id": 18,
      "datamaster": "country",
      "userdata": {
        "name": "Bahamas"
      }
    },
    {
      "id": 19,
      "datamaster": "country",
      "userdata": {
        "name": "Bahrain"
      }
    },
    {
      "id": 20,
      "datamaster": "country",
      "userdata": {
        "name": "Bangladesh"
      }
    },
    {
      "id": 21,
      "datamaster": "country",
      "userdata": {
        "name": "Barbados"
      }
    },
    {
      "id": 22,
      "datamaster": "country",
      "userdata": {
        "name": "Belarus"
      }
    },
    {
      "id": 23,
      "datamaster": "country",
      "userdata": {
        "name": "Belgium"
      }
    },
    {
      "id": 24,
      "datamaster": "country",
      "userdata": {
        "name": "Belize"
      }
    },
    {
      "id": 25,
      "datamaster": "country",
      "userdata": {
        "name": "Benin"
      }
    },
    {
      "id": 26,
      "datamaster": "country",
      "userdata": {
        "name": "Bermuda"
      }
    },
    {
      "id": 27,
      "datamaster": "country",
      "userdata": {
        "name": "Bhutan"
      }
    },
    {
      "id": 28,
      "datamaster": "country",
      "userdata": {
        "name": "Bolivia"
      }
    },
    {
      "id": 29,
      "datamaster": "country",
      "userdata": {
        "name": "Bosnia And Herzegovina"
      }
    },
    {
      "id": 30,
      "datamaster": "country",
      "userdata": {
        "name": "Botswana"
      }
    },
    {
      "id": 31,
      "datamaster": "country",
      "userdata": {
        "name": "Bouvet Island"
      }
    },
    {
      "id": 32,
      "datamaster": "country",
      "userdata": {
        "name": "Brazil"
      }
    },
    {
      "id": 33,
      "datamaster": "country",
      "userdata": {
        "name": "British Indian Ocean Territory"
      }
    },
    {
      "id": 34,
      "datamaster": "country",
      "userdata": {
        "name": "Brunei Darussalam"
      }
    },
    {
      "id": 35,
      "datamaster": "country",
      "userdata": {
        "name": "Bulgaria"
      }
    },
    {
      "id": 36,
      "datamaster": "country",
      "userdata": {
        "name": "Burkina Faso"
      }
    },
    {
      "id": 37,
      "datamaster": "country",
      "userdata": {
        "name": "Burundi"
      }
    },
    {
      "id": 38,
      "datamaster": "country",
      "userdata": {
        "name": "Cambodia"
      }
    },
    {
      "id": 39,
      "datamaster": "country",
      "userdata": {
        "name": "Cameroon"
      }
    },
    {
      "id": 40,
      "datamaster": "country",
      "userdata": {
        "name": "Canada"
      }
    },
    {
      "id": 41,
      "datamaster": "country",
      "userdata": {
        "name": "Cape Verde"
      }
    },
    {
      "id": 42,
      "datamaster": "country",
      "userdata": {
        "name": "Cayman Islands"
      }
    },
    {
      "id": 43,
      "datamaster": "country",
      "userdata": {
        "name": "Central African Republic"
      }
    },
    {
      "id": 44,
      "datamaster": "country",
      "userdata": {
        "name": "Chad"
      }
    },
    {
      "id": 45,
      "datamaster": "country",
      "userdata": {
        "name": "Chile"
      }
    },
    {
      "id": 46,
      "datamaster": "country",
      "userdata": {
        "name": "China"
      }
    },
    {
      "id": 47,
      "datamaster": "country",
      "userdata": {
        "name": "Christmas Island"
      }
    },
    {
      "id": 48,
      "datamaster": "country",
      "userdata": {
        "name": "Cocos (Keeling) Islands"
      }
    },
    {
      "id": 49,
      "datamaster": "country",
      "userdata": {
        "name": "Colombia"
      }
    },
    {
      "id": 50,
      "datamaster": "country",
      "userdata": {
        "name": "Comoros"
      }
    },
    {
      "id": 51,
      "datamaster": "country",
      "userdata": {
        "name": "Congo"
      }
    },
    {
      "id": 52,
      "datamaster": "country",
      "userdata": {
        "name": "Congo, The Democratic Republic Of The"
      }
    },
    {
      "id": 53,
      "datamaster": "country",
      "userdata": {
        "name": "Cook Islands"
      }
    },
    {
      "id": 54,
      "datamaster": "country",
      "userdata": {
        "name": "Costa Rica"
      }
    },
    {
      "id": 55,
      "datamaster": "country",
      "userdata": {
        "name": "Cote D'Ivoire"
      }
    },
    {
      "id": 56,
      "datamaster": "country",
      "userdata": {
        "name": "Croatia"
      }
    },
    {
      "id": 57,
      "datamaster": "country",
      "userdata": {
        "name": "Cuba"
      }
    },
    {
      "id": 58,
      "datamaster": "country",
      "userdata": {
        "name": "Cyprus"
      }
    },
    {
      "id": 59,
      "datamaster": "country",
      "userdata": {
        "name": "Czech Republic"
      }
    },
    {
      "id": 60,
      "datamaster": "country",
      "userdata": {
        "name": "Denmark"
      }
    },
    {
      "id": 61,
      "datamaster": "country",
      "userdata": {
        "name": "Djibouti"
      }
    },
    {
      "id": 62,
      "datamaster": "country",
      "userdata": {
        "name": "Dominica"
      }
    },
    {
      "id": 63,
      "datamaster": "country",
      "userdata": {
        "name": "Dominican Republic"
      }
    },
    {
      "id": 64,
      "datamaster": "country",
      "userdata": {
        "name": "Ecuador"
      }
    },
    {
      "id": 65,
      "datamaster": "country",
      "userdata": {
        "name": "Egypt"
      }
    },
    {
      "id": 66,
      "datamaster": "country",
      "userdata": {
        "name": "El Salvador"
      }
    },
    {
      "id": 67,
      "datamaster": "country",
      "userdata": {
        "name": "Equatorial Guinea"
      }
    },
    {
      "id": 68,
      "datamaster": "country",
      "userdata": {
        "name": "Eritrea"
      }
    },
    {
      "id": 69,
      "datamaster": "country",
      "userdata": {
        "name": "Estonia"
      }
    },
    {
      "id": 70,
      "datamaster": "country",
      "userdata": {
        "name": "Ethiopia"
      }
    },
    {
      "id": 71,
      "datamaster": "country",
      "userdata": {
        "name": "Falkland Islands (Malvinas)"
      }
    },
    {
      "id": 72,
      "datamaster": "country",
      "userdata": {
        "name": "Faroe Islands"
      }
    },
    {
      "id": 73,
      "datamaster": "country",
      "userdata": {
        "name": "Fiji"
      }
    },
    {
      "id": 74,
      "datamaster": "country",
      "userdata": {
        "name": "Finland"
      }
    },
    {
      "id": 75,
      "datamaster": "country",
      "userdata": {
        "name": "France"
      }
    },
    {
      "id": 76,
      "datamaster": "country",
      "userdata": {
        "name": "French Guiana"
      }
    },
    {
      "id": 77,
      "datamaster": "country",
      "userdata": {
        "name": "French Polynesia"
      }
    },
    {
      "id": 78,
      "datamaster": "country",
      "userdata": {
        "name": "French Southern Territories"
      }
    },
    {
      "id": 79,
      "datamaster": "country",
      "userdata": {
        "name": "Gabon"
      }
    },
    {
      "id": 80,
      "datamaster": "country",
      "userdata": {
        "name": "Gambia"
      }
    },
    {
      "id": 81,
      "datamaster": "country",
      "userdata": {
        "name": "Georgia"
      }
    },
    {
      "id": 82,
      "datamaster": "country",
      "userdata": {
        "name": "Germany"
      }
    },
    {
      "id": 83,
      "datamaster": "country",
      "userdata": {
        "name": "Ghana"
      }
    },
    {
      "id": 84,
      "datamaster": "country",
      "userdata": {
        "name": "Gibraltar"
      }
    },
    {
      "id": 85,
      "datamaster": "country",
      "userdata": {
        "name": "Greece"
      }
    },
    {
      "id": 86,
      "datamaster": "country",
      "userdata": {
        "name": "Greenland"
      }
    },
    {
      "id": 87,
      "datamaster": "country",
      "userdata": {
        "name": "Grenada"
      }
    },
    {
      "id": 88,
      "datamaster": "country",
      "userdata": {
        "name": "Guadeloupe"
      }
    },
    {
      "id": 89,
      "datamaster": "country",
      "userdata": {
        "name": "Guam"
      }
    },
    {
      "id": 90,
      "datamaster": "country",
      "userdata": {
        "name": "Guatemala"
      }
    },
    {
      "id": 91,
      "datamaster": "country",
      "userdata": {
        "name": "Guernsey"
      }
    },
    {
      "id": 92,
      "datamaster": "country",
      "userdata": {
        "name": "Guinea"
      }
    },
    {
      "id": 93,
      "datamaster": "country",
      "userdata": {
        "name": "Guinea-Bissau"
      }
    },
    {
      "id": 94,
      "datamaster": "country",
      "userdata": {
        "name": "Guyana"
      }
    },
    {
      "id": 95,
      "datamaster": "country",
      "userdata": {
        "name": "Haiti"
      }
    },
    {
      "id": 96,
      "datamaster": "country",
      "userdata": {
        "name": "Heard Island And Mcdonald Islands"
      }
    },
    {
      "id": 97,
      "datamaster": "country",
      "userdata": {
        "name": "Holy See (Vatican City State)"
      }
    },
    {
      "id": 98,
      "datamaster": "country",
      "userdata": {
        "name": "Honduras"
      }
    },
    {
      "id": 99,
      "datamaster": "country",
      "userdata": {
        "name": "Hong Kong"
      }
    },
    {
      "id": 100,
      "datamaster": "country",
      "userdata": {
        "name": "Hungary"
      }
    },
    {
      "id": 101,
      "datamaster": "country",
      "userdata": {
        "name": "Iceland"
      }
    },
    {
      "id": 102,
      "datamaster": "country",
      "userdata": {
        "name": "India"
      }
    },
    {
      "id": 103,
      "datamaster": "country",
      "userdata": {
        "name": "Indonesia"
      }
    },
    {
      "id": 104,
      "datamaster": "country",
      "userdata": {
        "name": "Iran, Islamic Republic Of"
      }
    },
    {
      "id": 105,
      "datamaster": "country",
      "userdata": {
        "name": "Iraq"
      }
    },
    {
      "id": 106,
      "datamaster": "country",
      "userdata": {
        "name": "Ireland"
      }
    },
    {
      "id": 107,
      "datamaster": "country",
      "userdata": {
        "name": "Isle Of Man"
      }
    },
    {
      "id": 108,
      "datamaster": "country",
      "userdata": {
        "name": "Israel"
      }
    },
    {
      "id": 109,
      "datamaster": "country",
      "userdata": {
        "name": "Italy"
      }
    },
    {
      "id": 110,
      "datamaster": "country",
      "userdata": {
        "name": "Jamaica"
      }
    },
    {
      "id": 111,
      "datamaster": "country",
      "userdata": {
        "name": "Japan"
      }
    },
    {
      "id": 112,
      "datamaster": "country",
      "userdata": {
        "name": "Jersey"
      }
    },
    {
      "id": 113,
      "datamaster": "country",
      "userdata": {
        "name": "Jordan"
      }
    },
    {
      "id": 114,
      "datamaster": "country",
      "userdata": {
        "name": "Kazakhstan"
      }
    },
    {
      "id": 115,
      "datamaster": "country",
      "userdata": {
        "name": "Kenya"
      }
    },
    {
      "id": 116,
      "datamaster": "country",
      "userdata": {
        "name": "Kiribati"
      }
    },
    {
      "id": 117,
      "datamaster": "country",
      "userdata": {
        "name": "Korea, Democratic People'S Republic Of"
      }
    },
    {
      "id": 118,
      "datamaster": "country",
      "userdata": {
        "name": "Korea, Republic Of"
      }
    },
    {
      "id": 119,
      "datamaster": "country",
      "userdata": {
        "name": "Kuwait"
      }
    },
    {
      "id": 120,
      "datamaster": "country",
      "userdata": {
        "name": "Kyrgyzstan"
      }
    },
    {
      "id": 121,
      "datamaster": "country",
      "userdata": {
        "name": "Lao People'S Democratic Republic"
      }
    },
    {
      "id": 122,
      "datamaster": "country",
      "userdata": {
        "name": "Latvia"
      }
    },
    {
      "id": 123,
      "datamaster": "country",
      "userdata": {
        "name": "Lebanon"
      }
    },
    {
      "id": 124,
      "datamaster": "country",
      "userdata": {
        "name": "Lesotho"
      }
    },
    {
      "id": 125,
      "datamaster": "country",
      "userdata": {
        "name": "Liberia"
      }
    },
    {
      "id": 126,
      "datamaster": "country",
      "userdata": {
        "name": "Libyan Arab Jamahiriya"
      }
    },
    {
      "id": 127,
      "datamaster": "country",
      "userdata": {
        "name": "Liechtenstein"
      }
    },
    {
      "id": 128,
      "datamaster": "country",
      "userdata": {
        "name": "Lithuania"
      }
    },
    {
      "id": 129,
      "datamaster": "country",
      "userdata": {
        "name": "Luxembourg"
      }
    },
    {
      "id": 130,
      "datamaster": "country",
      "userdata": {
        "name": "Macao"
      }
    },
    {
      "id": 131,
      "datamaster": "country",
      "userdata": {
        "name": "Macedonia, The Former Yugoslav Republic Of"
      }
    },
    {
      "id": 132,
      "datamaster": "country",
      "userdata": {
        "name": "Madagascar"
      }
    },
    {
      "id": 133,
      "datamaster": "country",
      "userdata": {
        "name": "Malawi"
      }
    },
    {
      "id": 134,
      "datamaster": "country",
      "userdata": {
        "name": "Malaysia"
      }
    },
    {
      "id": 135,
      "datamaster": "country",
      "userdata": {
        "name": "Maldives"
      }
    },
    {
      "id": 136,
      "datamaster": "country",
      "userdata": {
        "name": "Mali"
      }
    },
    {
      "id": 137,
      "datamaster": "country",
      "userdata": {
        "name": "Malta"
      }
    },
    {
      "id": 138,
      "datamaster": "country",
      "userdata": {
        "name": "Marshall Islands"
      }
    },
    {
      "id": 139,
      "datamaster": "country",
      "userdata": {
        "name": "Martinique"
      }
    },
    {
      "id": 140,
      "datamaster": "country",
      "userdata": {
        "name": "Mauritania"
      }
    },
    {
      "id": 141,
      "datamaster": "country",
      "userdata": {
        "name": "Mauritius"
      }
    },
    {
      "id": 142,
      "datamaster": "country",
      "userdata": {
        "name": "Mayotte"
      }
    },
    {
      "id": 143,
      "datamaster": "country",
      "userdata": {
        "name": "Mexico"
      }
    },
    {
      "id": 144,
      "datamaster": "country",
      "userdata": {
        "name": "Micronesia, Federated States Of"
      }
    },
    {
      "id": 145,
      "datamaster": "country",
      "userdata": {
        "name": "Moldova, Republic Of"
      }
    },
    {
      "id": 146,
      "datamaster": "country",
      "userdata": {
        "name": "Monaco"
      }
    },
    {
      "id": 147,
      "datamaster": "country",
      "userdata": {
        "name": "Mongolia"
      }
    },
    {
      "id": 148,
      "datamaster": "country",
      "userdata": {
        "name": "Montserrat"
      }
    },
    {
      "id": 149,
      "datamaster": "country",
      "userdata": {
        "name": "Morocco"
      }
    },
    {
      "id": 150,
      "datamaster": "country",
      "userdata": {
        "name": "Mozambique"
      }
    },
    {
      "id": 151,
      "datamaster": "country",
      "userdata": {
        "name": "Myanmar"
      }
    },
    {
      "id": 152,
      "datamaster": "country",
      "userdata": {
        "name": "Namibia"
      }
    },
    {
      "id": 153,
      "datamaster": "country",
      "userdata": {
        "name": "Nauru"
      }
    },
    {
      "id": 154,
      "datamaster": "country",
      "userdata": {
        "name": "Nepal"
      }
    },
    {
      "id": 155,
      "datamaster": "country",
      "userdata": {
        "name": "Netherlands"
      }
    },
    {
      "id": 156,
      "datamaster": "country",
      "userdata": {
        "name": "Netherlands Antilles"
      }
    },
    {
      "id": 157,
      "datamaster": "country",
      "userdata": {
        "name": "New Caledonia"
      }
    },
    {
      "id": 158,
      "datamaster": "country",
      "userdata": {
        "name": "New Zealand"
      }
    },
    {
      "id": 159,
      "datamaster": "country",
      "userdata": {
        "name": "Nicaragua"
      }
    },
    {
      "id": 160,
      "datamaster": "country",
      "userdata": {
        "name": "Niger"
      }
    },
    {
      "id": 161,
      "datamaster": "country",
      "userdata": {
        "name": "Nigeria"
      }
    },
    {
      "id": 162,
      "datamaster": "country",
      "userdata": {
        "name": "Niue"
      }
    },
    {
      "id": 163,
      "datamaster": "country",
      "userdata": {
        "name": "Norfolk Island"
      }
    },
    {
      "id": 164,
      "datamaster": "country",
      "userdata": {
        "name": "Northern Mariana Islands"
      }
    },
    {
      "id": 165,
      "datamaster": "country",
      "userdata": {
        "name": "Norway"
      }
    },
    {
      "id": 166,
      "datamaster": "country",
      "userdata": {
        "name": "Oman"
      }
    },
    {
      "id": 167,
      "datamaster": "country",
      "userdata": {
        "name": "Pakistan"
      }
    },
    {
      "id": 168,
      "datamaster": "country",
      "userdata": {
        "name": "Palau"
      }
    },
    {
      "id": 169,
      "datamaster": "country",
      "userdata": {
        "name": "Palestinian Territory, Occupied"
      }
    },
    {
      "id": 170,
      "datamaster": "country",
      "userdata": {
        "name": "Panama"
      }
    },
    {
      "id": 171,
      "datamaster": "country",
      "userdata": {
        "name": "Papua New Guinea"
      }
    },
    {
      "id": 172,
      "datamaster": "country",
      "userdata": {
        "name": "Paraguay"
      }
    },
    {
      "id": 173,
      "datamaster": "country",
      "userdata": {
        "name": "Peru"
      }
    },
    {
      "id": 174,
      "datamaster": "country",
      "userdata": {
        "name": "Philippines"
      }
    },
    {
      "id": 175,
      "datamaster": "country",
      "userdata": {
        "name": "Pitcairn"
      }
    },
    {
      "id": 176,
      "datamaster": "country",
      "userdata": {
        "name": "Poland"
      }
    },
    {
      "id": 177,
      "datamaster": "country",
      "userdata": {
        "name": "Portugal"
      }
    },
    {
      "id": 178,
      "datamaster": "country",
      "userdata": {
        "name": "Puerto Rico"
      }
    },
    {
      "id": 179,
      "datamaster": "country",
      "userdata": {
        "name": "Qatar"
      }
    },
    {
      "id": 180,
      "datamaster": "country",
      "userdata": {
        "name": "Reunion"
      }
    },
    {
      "id": 181,
      "datamaster": "country",
      "userdata": {
        "name": "Romania"
      }
    },
    {
      "id": 182,
      "datamaster": "country",
      "userdata": {
        "name": "Russian Federation"
      }
    },
    {
      "id": 183,
      "datamaster": "country",
      "userdata": {
        "name": "Rwanda"
      }
    },
    {
      "id": 184,
      "datamaster": "country",
      "userdata": {
        "name": "Saint Helena"
      }
    },
    {
      "id": 185,
      "datamaster": "country",
      "userdata": {
        "name": "Saint Kitts And Nevis"
      }
    },
    {
      "id": 186,
      "datamaster": "country",
      "userdata": {
        "name": "Saint Lucia"
      }
    },
    {
      "id": 187,
      "datamaster": "country",
      "userdata": {
        "name": "Saint Pierre And Miquelon"
      }
    },
    {
      "id": 188,
      "datamaster": "country",
      "userdata": {
        "name": "Saint Vincent And The Grenadines"
      }
    },
    {
      "id": 189,
      "datamaster": "country",
      "userdata": {
        "name": "Samoa"
      }
    },
    {
      "id": 190,
      "datamaster": "country",
      "userdata": {
        "name": "San Marino"
      }
    },
    {
      "id": 191,
      "datamaster": "country",
      "userdata": {
        "name": "Sao Tome And Principe"
      }
    },
    {
      "id": 192,
      "datamaster": "country",
      "userdata": {
        "name": "Saudi Arabia"
      }
    },
    {
      "id": 193,
      "datamaster": "country",
      "userdata": {
        "name": "Senegal"
      }
    },
    {
      "id": 194,
      "datamaster": "country",
      "userdata": {
        "name": "Serbia And Montenegro"
      }
    },
    {
      "id": 195,
      "datamaster": "country",
      "userdata": {
        "name": "Seychelles"
      }
    },
    {
      "id": 196,
      "datamaster": "country",
      "userdata": {
        "name": "Sierra Leone"
      }
    },
    {
      "id": 197,
      "datamaster": "country",
      "userdata": {
        "name": "Singapore"
      }
    },
    {
      "id": 198,
      "datamaster": "country",
      "userdata": {
        "name": "Slovakia"
      }
    },
    {
      "id": 199,
      "datamaster": "country",
      "userdata": {
        "name": "Slovenia"
      }
    },
    {
      "id": 200,
      "datamaster": "country",
      "userdata": {
        "name": "Solomon Islands"
      }
    },
    {
      "id": 201,
      "datamaster": "country",
      "userdata": {
        "name": "Somalia"
      }
    },
    {
      "id": 202,
      "datamaster": "country",
      "userdata": {
        "name": "South Africa"
      }
    },
    {
      "id": 203,
      "datamaster": "country",
      "userdata": {
        "name": "South Georgia And The South Sandwich Islands"
      }
    },
    {
      "id": 204,
      "datamaster": "country",
      "userdata": {
        "name": "Spain"
      }
    },
    {
      "id": 205,
      "datamaster": "country",
      "userdata": {
        "name": "Sri Lanka"
      }
    },
    {
      "id": 206,
      "datamaster": "country",
      "userdata": {
        "name": "Sudan"
      }
    },
    {
      "id": 207,
      "datamaster": "country",
      "userdata": {
        "name": "Suriname"
      }
    },
    {
      "id": 208,
      "datamaster": "country",
      "userdata": {
        "name": "Svalbard And Jan Mayen"
      }
    },
    {
      "id": 209,
      "datamaster": "country",
      "userdata": {
        "name": "Swaziland"
      }
    },
    {
      "id": 210,
      "datamaster": "country",
      "userdata": {
        "name": "Sweden"
      }
    },
    {
      "id": 211,
      "datamaster": "country",
      "userdata": {
        "name": "Switzerland"
      }
    },
    {
      "id": 212,
      "datamaster": "country",
      "userdata": {
        "name": "Syrian Arab Republic"
      }
    },
    {
      "id": 213,
      "datamaster": "country",
      "userdata": {
        "name": "Taiwan, Province Of China"
      }
    },
    {
      "id": 214,
      "datamaster": "country",
      "userdata": {
        "name": "Tajikistan"
      }
    },
    {
      "id": 215,
      "datamaster": "country",
      "userdata": {
        "name": "Tanzania, United Republic Of"
      }
    },
    {
      "id": 216,
      "datamaster": "country",
      "userdata": {
        "name": "Thailand"
      }
    },
    {
      "id": 217,
      "datamaster": "country",
      "userdata": {
        "name": "Timor-Leste"
      }
    },
    {
      "id": 218,
      "datamaster": "country",
      "userdata": {
        "name": "Togo"
      }
    },
    {
      "id": 219,
      "datamaster": "country",
      "userdata": {
        "name": "Tokelau"
      }
    },
    {
      "id": 220,
      "datamaster": "country",
      "userdata": {
        "name": "Tonga"
      }
    },
    {
      "id": 221,
      "datamaster": "country",
      "userdata": {
        "name": "Trinidad And Tobago"
      }
    },
    {
      "id": 222,
      "datamaster": "country",
      "userdata": {
        "name": "Tunisia"
      }
    },
    {
      "id": 223,
      "datamaster": "country",
      "userdata": {
        "name": "Turkey"
      }
    },
    {
      "id": 224,
      "datamaster": "country",
      "userdata": {
        "name": "Turkmenistan"
      }
    },
    {
      "id": 225,
      "datamaster": "country",
      "userdata": {
        "name": "Turks And Caicos Islands"
      }
    },
    {
      "id": 226,
      "datamaster": "country",
      "userdata": {
        "name": "Tuvalu"
      }
    },
    {
      "id": 227,
      "datamaster": "country",
      "userdata": {
        "name": "Uganda"
      }
    },
    {
      "id": 228,
      "datamaster": "country",
      "userdata": {
        "name": "Ukraine"
      }
    },
    {
      "id": 229,
      "datamaster": "country",
      "userdata": {
        "name": "United Arab Emirates"
      }
    },
    {
      "id": 230,
      "datamaster": "country",
      "userdata": {
        "name": "United Kingdom"
      }
    },
    {
      "id": 231,
      "datamaster": "country",
      "userdata": {
        "name": "United States"
      }
    },
    {
      "id": 232,
      "datamaster": "country",
      "userdata": {
        "name": "United States Minor Outlying Islands"
      }
    },
    {
      "id": 233,
      "datamaster": "country",
      "userdata": {
        "name": "Uruguay"
      }
    },
    {
      "id": 234,
      "datamaster": "country",
      "userdata": {
        "name": "Uzbekistan"
      }
    },
    {
      "id": 235,
      "datamaster": "country",
      "userdata": {
        "name": "Vanuatu"
      }
    },
    {
      "id": 236,
      "datamaster": "country",
      "userdata": {
        "name": "Venezuela"
      }
    },
    {
      "id": 237,
      "datamaster": "country",
      "userdata": {
        "name": "Viet Nam"
      }
    },
    {
      "id": 238,
      "datamaster": "country",
      "userdata": {
        "name": "Virgin Islands, British"
      }
    },
    {
      "id": 239,
      "datamaster": "country",
      "userdata": {
        "name": "Virgin Islands, U.S."
      }
    },
    {
      "id": 240,
      "datamaster": "country",
      "userdata": {
        "name": "Wallis And Futuna"
      }
    },
    {
      "id": 241,
      "datamaster": "country",
      "userdata": {
        "name": "Western Sahara"
      }
    },
    {
      "id": 242,
      "datamaster": "country",
      "userdata": {
        "name": "Yemen"
      }
    },
    {
      "id": 243,
      "datamaster": "country",
      "userdata": {
        "name": "Zambia"
      }
    },
    {
      "id": 244,
      "datamaster": "country",
      "userdata": {
        "name": "Zimbabwe"
      }
    },
    {
      "id": 245,
      "datamaster": "country",
      "userdata": {
        "name": "(Not Specified)"
      }
    }
  ];

  jimData.datamasters["contact"] = [
    {
      "id": 1,
      "datamaster": "contact",
      "userdata": {
        "name": "sample text",
        "mail": "sample text",
        "message": "sample text",
        "phone": "sample text",
        "city": "sample text"
      }
    },
    {
      "id": 2,
      "datamaster": "contact",
      "userdata": {
        "name": "sample text",
        "mail": "sample text",
        "message": "sample text",
        "phone": "sample text",
        "city": "sample text"
      }
    },
    {
      "id": 3,
      "datamaster": "contact",
      "userdata": {
        "name": "sample text",
        "mail": "sample text",
        "message": "sample text",
        "phone": "sample text",
        "city": "sample text"
      }
    },
    {
      "id": 4,
      "datamaster": "contact",
      "userdata": {
        "name": "sample text",
        "mail": "sample text",
        "message": "sample text",
        "phone": "sample text",
        "city": "sample text"
      }
    }
  ];

  jimData.datamasters["Quotes"] = [
    {
      "id": 1,
      "datamaster": "Quotes",
      "userdata": {
        "Plans": "Medical Insurance",
        "Title": "Mr",
        "First Name": "Jane",
        "Middle initials": "S.",
        "Family name": "Gomez",
        "Date of birth": "9/27/2011",
        "Gender": "Female",
        "Nationality": "Colombia",
        "Country of residence": "Cambodia",
        "Email": "jgomez0@bloomberg.com",
        "Phone": "9-(099)981-1075",
        "Heart disorders": "false",
        "Endocrine disorders": "true",
        "Breathing disorders": "true",
        "Stomach disorders": "false",
        "Assigned to": "john"
      }
    },
    {
      "id": 2,
      "datamaster": "Quotes",
      "userdata": {
        "Plans": "Medicines and Equipment",
        "Title": "Ms",
        "First Name": "Virginia",
        "Middle initials": "M.",
        "Family name": "Ramirez",
        "Date of birth": "9/3/2006",
        "Gender": "Female",
        "Nationality": "Dominican Republic",
        "Country of residence": "France",
        "Email": "vramirez1@shareasale.com",
        "Phone": "4-(634)343-7134",
        "Heart disorders": "true",
        "Endocrine disorders": "false",
        "Breathing disorders": "true",
        "Stomach disorders": "true",
        "Assigned to": "john"
      }
    },
    {
      "id": 3,
      "datamaster": "Quotes",
      "userdata": {
        "Plans": "Evacuation",
        "Title": "Ms",
        "First Name": "Julia",
        "Middle initials": "S.",
        "Family name": "Hicks",
        "Date of birth": "10/13/1906",
        "Gender": "Female",
        "Nationality": "Colombia",
        "Country of residence": "Nepal",
        "Email": "jhicks2@google.com.au",
        "Phone": "0-(664)363-9385",
        "Heart disorders": "true",
        "Endocrine disorders": "true",
        "Breathing disorders": "true",
        "Stomach disorders": "true",
        "Assigned to": ""
      }
    },
    {
      "id": 4,
      "datamaster": "Quotes",
      "userdata": {
        "Plans": "",
        "Title": "Ms",
        "First Name": "Bobby",
        "Middle initials": "J.",
        "Family name": "Day",
        "Date of birth": "3/21/1920",
        "Gender": "Male",
        "Nationality": "France",
        "Country of residence": "Argentina",
        "Email": "bday3@webs.com",
        "Phone": "6-(958)180-2641",
        "Heart disorders": "true",
        "Endocrine disorders": "false",
        "Breathing disorders": "false",
        "Stomach disorders": "true",
        "Assigned to": "steve"
      }
    },
    {
      "id": 5,
      "datamaster": "Quotes",
      "userdata": {
        "Plans": "Medicines and Equipment",
        "Title": "Mr",
        "First Name": "Sarah",
        "Middle initials": "M.",
        "Family name": "Wagner",
        "Date of birth": "10/15/2002",
        "Gender": "Female",
        "Nationality": "Mongolia",
        "Country of residence": "Serbia",
        "Email": "swagner4@mozilla.com",
        "Phone": "9-(068)979-0903",
        "Heart disorders": "false",
        "Endocrine disorders": "false",
        "Breathing disorders": "false",
        "Stomach disorders": "false",
        "Assigned to": "steve"
      }
    },
    {
      "id": 6,
      "datamaster": "Quotes",
      "userdata": {
        "Plans": "",
        "Title": "Honorable",
        "First Name": "Wayne",
        "Middle initials": "M.",
        "Family name": "Gonzales",
        "Date of birth": "9/26/1945",
        "Gender": "Male",
        "Nationality": "France",
        "Country of residence": "Sweden",
        "Email": "wgonzales5@ca.gov",
        "Phone": "8-(438)837-7015",
        "Heart disorders": "true",
        "Endocrine disorders": "true",
        "Breathing disorders": "false",
        "Stomach disorders": "false",
        "Assigned to": "john"
      }
    },
    {
      "id": 7,
      "datamaster": "Quotes",
      "userdata": {
        "Plans": "",
        "Title": "Honorable",
        "First Name": "Roy",
        "Middle initials": "S.",
        "Family name": "Hernandez",
        "Date of birth": "6/3/1993",
        "Gender": "Male",
        "Nationality": "Indonesia",
        "Country of residence": "Russia",
        "Email": "rhernandez6@creativecommons.org",
        "Phone": "7-(443)817-7624",
        "Heart disorders": "true",
        "Endocrine disorders": "false",
        "Breathing disorders": "true",
        "Stomach disorders": "false",
        "Assigned to": ""
      }
    },
    {
      "id": 8,
      "datamaster": "Quotes",
      "userdata": {
        "Plans": "Evacuation",
        "Title": "Ms",
        "First Name": "Mary",
        "Middle initials": "M.",
        "Family name": "Day",
        "Date of birth": "8/14/1977",
        "Gender": "Female",
        "Nationality": "Russia",
        "Country of residence": "Cyprus",
        "Email": "mday7@kickstarter.com",
        "Phone": "4-(517)566-7621",
        "Heart disorders": "true",
        "Endocrine disorders": "false",
        "Breathing disorders": "true",
        "Stomach disorders": "true",
        "Assigned to": "john"
      }
    },
    {
      "id": 9,
      "datamaster": "Quotes",
      "userdata": {
        "Plans": "",
        "Title": "Rev",
        "First Name": "Kenneth",
        "Middle initials": "S.",
        "Family name": "Rivera",
        "Date of birth": "2/10/1944",
        "Gender": "Male",
        "Nationality": "Brazil",
        "Country of residence": "China",
        "Email": "krivera8@telegraph.co.uk",
        "Phone": "8-(636)028-5177",
        "Heart disorders": "false",
        "Endocrine disorders": "false",
        "Breathing disorders": "true",
        "Stomach disorders": "false",
        "Assigned to": ""
      }
    },
    {
      "id": 10,
      "datamaster": "Quotes",
      "userdata": {
        "Plans": "Medicines and Equipment",
        "Title": "Mrs",
        "First Name": "Patricia",
        "Middle initials": "J.",
        "Family name": "Richardson",
        "Date of birth": "5/19/1937",
        "Gender": "Female",
        "Nationality": "China",
        "Country of residence": "Brazil",
        "Email": "prichardson9@abc.net.au",
        "Phone": "0-(288)356-9399",
        "Heart disorders": "false",
        "Endocrine disorders": "true",
        "Breathing disorders": "true",
        "Stomach disorders": "false",
        "Assigned to": "rich"
      }
    },
    {
      "id": 11,
      "datamaster": "Quotes",
      "userdata": {
        "Plans": "Medical Plus",
        "Title": "Ms",
        "First Name": "Roger",
        "Middle initials": "M.",
        "Family name": "Dean",
        "Date of birth": "2/5/1988",
        "Gender": "Male",
        "Nationality": "Philippines",
        "Country of residence": "Indonesia",
        "Email": "rdeana@icq.com",
        "Phone": "5-(169)032-4719",
        "Heart disorders": "true",
        "Endocrine disorders": "false",
        "Breathing disorders": "false",
        "Stomach disorders": "true",
        "Assigned to": ""
      }
    },
    {
      "id": 12,
      "datamaster": "Quotes",
      "userdata": {
        "Plans": "Evacuation",
        "Title": "Dr",
        "First Name": "Tammy",
        "Middle initials": "M.",
        "Family name": "Bell",
        "Date of birth": "7/30/1956",
        "Gender": "Female",
        "Nationality": "China",
        "Country of residence": "Albania",
        "Email": "tbellb@odnoklassniki.ru",
        "Phone": "8-(774)045-6338",
        "Heart disorders": "true",
        "Endocrine disorders": "false",
        "Breathing disorders": "false",
        "Stomach disorders": "true",
        "Assigned to": "john"
      }
    },
    {
      "id": 13,
      "datamaster": "Quotes",
      "userdata": {
        "Plans": "Medicines and Equipment",
        "Title": "Mr",
        "First Name": "Anna",
        "Middle initials": "J.",
        "Family name": "Fields",
        "Date of birth": "8/15/1911",
        "Gender": "Female",
        "Nationality": "Indonesia",
        "Country of residence": "Hong Kong",
        "Email": "afieldsc@delicious.com",
        "Phone": "7-(969)616-7389",
        "Heart disorders": "true",
        "Endocrine disorders": "true",
        "Breathing disorders": "true",
        "Stomach disorders": "false",
        "Assigned to": "rich"
      }
    },
    {
      "id": 14,
      "datamaster": "Quotes",
      "userdata": {
        "Plans": "Medical Insurance",
        "Title": "Ms",
        "First Name": "Lillian",
        "Middle initials": "M.",
        "Family name": "Evans",
        "Date of birth": "4/13/1975",
        "Gender": "Female",
        "Nationality": "Indonesia",
        "Country of residence": "Morocco",
        "Email": "levansd@google.de",
        "Phone": "1-(013)828-9404",
        "Heart disorders": "true",
        "Endocrine disorders": "false",
        "Breathing disorders": "false",
        "Stomach disorders": "false",
        "Assigned to": "steve"
      }
    },
    {
      "id": 15,
      "datamaster": "Quotes",
      "userdata": {
        "Plans": "Medical Insurance",
        "Title": "Rev",
        "First Name": "Ronald",
        "Middle initials": "J.",
        "Family name": "Robertson",
        "Date of birth": "6/11/1941",
        "Gender": "Male",
        "Nationality": "China",
        "Country of residence": "China",
        "Email": "rrobertsone@hugedomains.com",
        "Phone": "4-(626)527-1913",
        "Heart disorders": "true",
        "Endocrine disorders": "true",
        "Breathing disorders": "false",
        "Stomach disorders": "true",
        "Assigned to": ""
      }
    },
    {
      "id": 16,
      "datamaster": "Quotes",
      "userdata": {
        "Plans": "Evacuation",
        "Title": "Honorable",
        "First Name": "Christina",
        "Middle initials": "S.",
        "Family name": "Morgan",
        "Date of birth": "4/19/1932",
        "Gender": "Female",
        "Nationality": "China",
        "Country of residence": "Portugal",
        "Email": "cmorganf@creativecommons.org",
        "Phone": "2-(816)287-2664",
        "Heart disorders": "true",
        "Endocrine disorders": "true",
        "Breathing disorders": "true",
        "Stomach disorders": "true",
        "Assigned to": "steve"
      }
    },
    {
      "id": 17,
      "datamaster": "Quotes",
      "userdata": {
        "Plans": "Medicines and Equipment",
        "Title": "Mr",
        "First Name": "Jonathan",
        "Middle initials": "J.",
        "Family name": "Collins",
        "Date of birth": "1/28/1959",
        "Gender": "Male",
        "Nationality": "Thailand",
        "Country of residence": "Netherlands",
        "Email": "jcollinsg@google.nl",
        "Phone": "7-(669)128-5115",
        "Heart disorders": "true",
        "Endocrine disorders": "true",
        "Breathing disorders": "true",
        "Stomach disorders": "true",
        "Assigned to": "steve"
      }
    },
    {
      "id": 18,
      "datamaster": "Quotes",
      "userdata": {
        "Plans": "Medicines and Equipment",
        "Title": "Rev",
        "First Name": "Stephen",
        "Middle initials": "J.",
        "Family name": "Hunt",
        "Date of birth": "1/15/1937",
        "Gender": "Male",
        "Nationality": "Kuwait",
        "Country of residence": "Indonesia",
        "Email": "shunth@unc.edu",
        "Phone": "0-(236)130-4885",
        "Heart disorders": "false",
        "Endocrine disorders": "false",
        "Breathing disorders": "true",
        "Stomach disorders": "false",
        "Assigned to": "john"
      }
    },
    {
      "id": 19,
      "datamaster": "Quotes",
      "userdata": {
        "Plans": "Medical Plus",
        "Title": "Mrs",
        "First Name": "Melissa",
        "Middle initials": "M.",
        "Family name": "Scott",
        "Date of birth": "6/26/1990",
        "Gender": "Female",
        "Nationality": "Armenia",
        "Country of residence": "Sweden",
        "Email": "mscotti@seesaa.net",
        "Phone": "9-(056)777-1679",
        "Heart disorders": "true",
        "Endocrine disorders": "false",
        "Breathing disorders": "false",
        "Stomach disorders": "false",
        "Assigned to": ""
      }
    },
    {
      "id": 20,
      "datamaster": "Quotes",
      "userdata": {
        "Plans": "Medical Plus",
        "Title": "Ms",
        "First Name": "Earl",
        "Middle initials": "J.",
        "Family name": "Stewart",
        "Date of birth": "3/12/1969",
        "Gender": "Male",
        "Nationality": "Cuba",
        "Country of residence": "Philippines",
        "Email": "estewartj@toplist.cz",
        "Phone": "4-(120)610-4454",
        "Heart disorders": "true",
        "Endocrine disorders": "false",
        "Breathing disorders": "true",
        "Stomach disorders": "true",
        "Assigned to": ""
      }
    },
    {
      "id": 21,
      "datamaster": "Quotes",
      "userdata": {
        "Plans": "Medical Insurance",
        "Title": "Rev",
        "First Name": "Deborah",
        "Middle initials": "J.",
        "Family name": "Arnold",
        "Date of birth": "7/22/1932",
        "Gender": "Female",
        "Nationality": "Honduras",
        "Country of residence": "South Africa",
        "Email": "darnoldk@apache.org",
        "Phone": "0-(572)632-3396",
        "Heart disorders": "false",
        "Endocrine disorders": "true",
        "Breathing disorders": "false",
        "Stomach disorders": "true",
        "Assigned to": "rich"
      }
    },
    {
      "id": 22,
      "datamaster": "Quotes",
      "userdata": {
        "Plans": "Medicines and Equipment",
        "Title": "Ms",
        "First Name": "Lori",
        "Middle initials": "J.",
        "Family name": "Boyd",
        "Date of birth": "3/23/1934",
        "Gender": "Female",
        "Nationality": "Portugal",
        "Country of residence": "Cuba",
        "Email": "lboydl@github.io",
        "Phone": "9-(295)277-2070",
        "Heart disorders": "false",
        "Endocrine disorders": "true",
        "Breathing disorders": "false",
        "Stomach disorders": "true",
        "Assigned to": ""
      }
    },
    {
      "id": 23,
      "datamaster": "Quotes",
      "userdata": {
        "Plans": "Evacuation",
        "Title": "Mrs",
        "First Name": "Earl",
        "Middle initials": "S.",
        "Family name": "Rivera",
        "Date of birth": "2/13/1991",
        "Gender": "Male",
        "Nationality": "Hungary",
        "Country of residence": "Indonesia",
        "Email": "eriveram@census.gov",
        "Phone": "8-(090)924-4139",
        "Heart disorders": "true",
        "Endocrine disorders": "false",
        "Breathing disorders": "false",
        "Stomach disorders": "false",
        "Assigned to": "steve"
      }
    },
    {
      "id": 24,
      "datamaster": "Quotes",
      "userdata": {
        "Plans": "Medical Plus",
        "Title": "Ms",
        "First Name": "Philip",
        "Middle initials": "S.",
        "Family name": "Wright",
        "Date of birth": "6/6/1995",
        "Gender": "Male",
        "Nationality": "Afghanistan",
        "Country of residence": "China",
        "Email": "pwrightn@tinyurl.com",
        "Phone": "0-(769)110-6482",
        "Heart disorders": "true",
        "Endocrine disorders": "false",
        "Breathing disorders": "false",
        "Stomach disorders": "true",
        "Assigned to": "steve"
      }
    },
    {
      "id": 25,
      "datamaster": "Quotes",
      "userdata": {
        "Plans": "Medicines and Equipment",
        "Title": "Dr",
        "First Name": "Bobby",
        "Middle initials": "J.",
        "Family name": "Ruiz",
        "Date of birth": "3/14/1941",
        "Gender": "Male",
        "Nationality": "China",
        "Country of residence": "Indonesia",
        "Email": "bruizo@ehow.com",
        "Phone": "9-(652)504-0438",
        "Heart disorders": "false",
        "Endocrine disorders": "true",
        "Breathing disorders": "false",
        "Stomach disorders": "true",
        "Assigned to": ""
      }
    },
    {
      "id": 26,
      "datamaster": "Quotes",
      "userdata": {
        "Plans": "",
        "Title": "Dr",
        "First Name": "Ashley",
        "Middle initials": "S.",
        "Family name": "Thomas",
        "Date of birth": "6/24/1968",
        "Gender": "Female",
        "Nationality": "Finland",
        "Country of residence": "Brazil",
        "Email": "athomasp@weebly.com",
        "Phone": "2-(605)576-7703",
        "Heart disorders": "true",
        "Endocrine disorders": "true",
        "Breathing disorders": "false",
        "Stomach disorders": "false",
        "Assigned to": ""
      }
    },
    {
      "id": 27,
      "datamaster": "Quotes",
      "userdata": {
        "Plans": "Medical Insurance",
        "Title": "Rev",
        "First Name": "Katherine",
        "Middle initials": "S.",
        "Family name": "Davis",
        "Date of birth": "12/4/1979",
        "Gender": "Female",
        "Nationality": "China",
        "Country of residence": "China",
        "Email": "kdavisq@house.gov",
        "Phone": "5-(168)556-1602",
        "Heart disorders": "false",
        "Endocrine disorders": "false",
        "Breathing disorders": "true",
        "Stomach disorders": "true",
        "Assigned to": "rich"
      }
    },
    {
      "id": 28,
      "datamaster": "Quotes",
      "userdata": {
        "Plans": "",
        "Title": "Dr",
        "First Name": "Brian",
        "Middle initials": "J.",
        "Family name": "Hughes",
        "Date of birth": "7/31/2005",
        "Gender": "Male",
        "Nationality": "Egypt",
        "Country of residence": "China",
        "Email": "bhughesr@mtv.com",
        "Phone": "6-(264)258-7299",
        "Heart disorders": "true",
        "Endocrine disorders": "true",
        "Breathing disorders": "true",
        "Stomach disorders": "false",
        "Assigned to": ""
      }
    },
    {
      "id": 29,
      "datamaster": "Quotes",
      "userdata": {
        "Plans": "Medical Insurance",
        "Title": "Ms",
        "First Name": "Charles",
        "Middle initials": "S.",
        "Family name": "Bradley",
        "Date of birth": "10/4/1907",
        "Gender": "Male",
        "Nationality": "China",
        "Country of residence": "China",
        "Email": "cbradleys@independent.co.uk",
        "Phone": "8-(946)443-1705",
        "Heart disorders": "true",
        "Endocrine disorders": "false",
        "Breathing disorders": "true",
        "Stomach disorders": "false",
        "Assigned to": "john"
      }
    },
    {
      "id": 30,
      "datamaster": "Quotes",
      "userdata": {
        "Plans": "Medical Plus",
        "Title": "Mr",
        "First Name": "Irene",
        "Middle initials": "J.",
        "Family name": "Rivera",
        "Date of birth": "2/15/1901",
        "Gender": "Female",
        "Nationality": "Argentina",
        "Country of residence": "Indonesia",
        "Email": "iriverat@phoca.cz",
        "Phone": "6-(070)870-0693",
        "Heart disorders": "false",
        "Endocrine disorders": "false",
        "Breathing disorders": "true",
        "Stomach disorders": "true",
        "Assigned to": "steve"
      }
    },
    {
      "id": 31,
      "datamaster": "Quotes",
      "userdata": {
        "Plans": "Medical Plus",
        "Title": "Dr",
        "First Name": "Juan",
        "Middle initials": "M.",
        "Family name": "Washington",
        "Date of birth": "5/8/1908",
        "Gender": "Male",
        "Nationality": "Palestinian Territory",
        "Country of residence": "China",
        "Email": "jwashingtonu@scientificamerican.com",
        "Phone": "3-(240)525-6816",
        "Heart disorders": "true",
        "Endocrine disorders": "false",
        "Breathing disorders": "false",
        "Stomach disorders": "false",
        "Assigned to": "john"
      }
    },
    {
      "id": 32,
      "datamaster": "Quotes",
      "userdata": {
        "Plans": "",
        "Title": "Honorable",
        "First Name": "Albert",
        "Middle initials": "J.",
        "Family name": "Young",
        "Date of birth": "3/4/1944",
        "Gender": "Male",
        "Nationality": "France",
        "Country of residence": "Czech Republic",
        "Email": "ayoungv@wordpress.com",
        "Phone": "7-(815)337-3772",
        "Heart disorders": "false",
        "Endocrine disorders": "true",
        "Breathing disorders": "false",
        "Stomach disorders": "false",
        "Assigned to": ""
      }
    },
    {
      "id": 33,
      "datamaster": "Quotes",
      "userdata": {
        "Plans": "Evacuation",
        "Title": "Ms",
        "First Name": "Sara",
        "Middle initials": "J.",
        "Family name": "Perry",
        "Date of birth": "8/1/1992",
        "Gender": "Female",
        "Nationality": "China",
        "Country of residence": "Mexico",
        "Email": "sperryw@washingtonpost.com",
        "Phone": "6-(324)847-9058",
        "Heart disorders": "false",
        "Endocrine disorders": "false",
        "Breathing disorders": "false",
        "Stomach disorders": "true",
        "Assigned to": "john"
      }
    },
    {
      "id": 34,
      "datamaster": "Quotes",
      "userdata": {
        "Plans": "",
        "Title": "Mrs",
        "First Name": "Lori",
        "Middle initials": "J.",
        "Family name": "Nelson",
        "Date of birth": "11/16/1983",
        "Gender": "Female",
        "Nationality": "Canada",
        "Country of residence": "Brazil",
        "Email": "lnelsonx@house.gov",
        "Phone": "4-(702)893-9385",
        "Heart disorders": "false",
        "Endocrine disorders": "false",
        "Breathing disorders": "false",
        "Stomach disorders": "false",
        "Assigned to": "john"
      }
    },
    {
      "id": 35,
      "datamaster": "Quotes",
      "userdata": {
        "Plans": "Medical Insurance",
        "Title": "Ms",
        "First Name": "Terry",
        "Middle initials": "S.",
        "Family name": "Watson",
        "Date of birth": "9/8/1913",
        "Gender": "Male",
        "Nationality": "Nigeria",
        "Country of residence": "Peru",
        "Email": "twatsony@wordpress.org",
        "Phone": "7-(990)893-3087",
        "Heart disorders": "false",
        "Endocrine disorders": "true",
        "Breathing disorders": "true",
        "Stomach disorders": "false",
        "Assigned to": "john"
      }
    },
    {
      "id": 36,
      "datamaster": "Quotes",
      "userdata": {
        "Plans": "Medical Insurance",
        "Title": "Mr",
        "First Name": "Jacqueline",
        "Middle initials": "J.",
        "Family name": "Stanley",
        "Date of birth": "12/20/1944",
        "Gender": "Female",
        "Nationality": "United States",
        "Country of residence": "China",
        "Email": "jstanleyz@nih.gov",
        "Phone": "2-(432)179-3260",
        "Heart disorders": "false",
        "Endocrine disorders": "true",
        "Breathing disorders": "true",
        "Stomach disorders": "true",
        "Assigned to": ""
      }
    },
    {
      "id": 37,
      "datamaster": "Quotes",
      "userdata": {
        "Plans": "Medical Insurance",
        "Title": "Honorable",
        "First Name": "Doris",
        "Middle initials": "S.",
        "Family name": "Dunn",
        "Date of birth": "11/12/1958",
        "Gender": "Female",
        "Nationality": "Serbia",
        "Country of residence": "Russia",
        "Email": "ddunn10@freewebs.com",
        "Phone": "4-(621)113-1853",
        "Heart disorders": "true",
        "Endocrine disorders": "true",
        "Breathing disorders": "true",
        "Stomach disorders": "true",
        "Assigned to": "steve"
      }
    },
    {
      "id": 38,
      "datamaster": "Quotes",
      "userdata": {
        "Plans": "Medical Plus",
        "Title": "Ms",
        "First Name": "Diane",
        "Middle initials": "J.",
        "Family name": "Olson",
        "Date of birth": "12/14/1956",
        "Gender": "Female",
        "Nationality": "Greece",
        "Country of residence": "China",
        "Email": "dolson11@nytimes.com",
        "Phone": "7-(197)655-7523",
        "Heart disorders": "true",
        "Endocrine disorders": "true",
        "Breathing disorders": "true",
        "Stomach disorders": "true",
        "Assigned to": "john"
      }
    },
    {
      "id": 39,
      "datamaster": "Quotes",
      "userdata": {
        "Plans": "",
        "Title": "Mrs",
        "First Name": "Louis",
        "Middle initials": "M.",
        "Family name": "Black",
        "Date of birth": "1/11/2001",
        "Gender": "Male",
        "Nationality": "Kosovo",
        "Country of residence": "China",
        "Email": "lblack12@jalbum.net",
        "Phone": "1-(134)116-5948",
        "Heart disorders": "true",
        "Endocrine disorders": "true",
        "Breathing disorders": "false",
        "Stomach disorders": "false",
        "Assigned to": "rich"
      }
    },
    {
      "id": 40,
      "datamaster": "Quotes",
      "userdata": {
        "Plans": "Medicines and Equipment",
        "Title": "Rev",
        "First Name": "Bruce",
        "Middle initials": "S.",
        "Family name": "Smith",
        "Date of birth": "7/23/1961",
        "Gender": "Male",
        "Nationality": "Sweden",
        "Country of residence": "China",
        "Email": "bsmith13@nyu.edu",
        "Phone": "4-(363)586-1652",
        "Heart disorders": "true",
        "Endocrine disorders": "false",
        "Breathing disorders": "true",
        "Stomach disorders": "true",
        "Assigned to": "john"
      }
    },
    {
      "id": 41,
      "datamaster": "Quotes",
      "userdata": {
        "Plans": "Medical Insurance",
        "Title": "Mr",
        "First Name": "Kenneth",
        "Middle initials": "J.",
        "Family name": "Diaz",
        "Date of birth": "11/16/1934",
        "Gender": "Male",
        "Nationality": "Russia",
        "Country of residence": "Argentina",
        "Email": "kdiaz14@salon.com",
        "Phone": "7-(967)407-9754",
        "Heart disorders": "false",
        "Endocrine disorders": "false",
        "Breathing disorders": "false",
        "Stomach disorders": "true",
        "Assigned to": "john"
      }
    },
    {
      "id": 42,
      "datamaster": "Quotes",
      "userdata": {
        "Plans": "",
        "Title": "Honorable",
        "First Name": "Edward",
        "Middle initials": "S.",
        "Family name": "Mitchell",
        "Date of birth": "6/17/1992",
        "Gender": "Male",
        "Nationality": "Guatemala",
        "Country of residence": "United Kingdom",
        "Email": "emitchell15@ocn.ne.jp",
        "Phone": "0-(542)195-7253",
        "Heart disorders": "false",
        "Endocrine disorders": "false",
        "Breathing disorders": "false",
        "Stomach disorders": "false",
        "Assigned to": ""
      }
    },
    {
      "id": 43,
      "datamaster": "Quotes",
      "userdata": {
        "Plans": "",
        "Title": "Ms",
        "First Name": "Jesse",
        "Middle initials": "J.",
        "Family name": "Porter",
        "Date of birth": "2/13/1910",
        "Gender": "Male",
        "Nationality": "Morocco",
        "Country of residence": "China",
        "Email": "jporter16@nifty.com",
        "Phone": "0-(887)356-4196",
        "Heart disorders": "false",
        "Endocrine disorders": "false",
        "Breathing disorders": "false",
        "Stomach disorders": "true",
        "Assigned to": "rich"
      }
    },
    {
      "id": 44,
      "datamaster": "Quotes",
      "userdata": {
        "Plans": "Medical Insurance",
        "Title": "Ms",
        "First Name": "Jeffrey",
        "Middle initials": "J.",
        "Family name": "Ray",
        "Date of birth": "3/5/1965",
        "Gender": "Male",
        "Nationality": "Poland",
        "Country of residence": "Colombia",
        "Email": "jray17@blogs.com",
        "Phone": "3-(019)234-7243",
        "Heart disorders": "false",
        "Endocrine disorders": "true",
        "Breathing disorders": "true",
        "Stomach disorders": "false",
        "Assigned to": ""
      }
    },
    {
      "id": 45,
      "datamaster": "Quotes",
      "userdata": {
        "Plans": "Medical Insurance",
        "Title": "Mrs",
        "First Name": "Tina",
        "Middle initials": "S.",
        "Family name": "Watson",
        "Date of birth": "11/5/1912",
        "Gender": "Female",
        "Nationality": "Nigeria",
        "Country of residence": "Russia",
        "Email": "twatson18@altervista.org",
        "Phone": "8-(432)378-9909",
        "Heart disorders": "false",
        "Endocrine disorders": "true",
        "Breathing disorders": "false",
        "Stomach disorders": "true",
        "Assigned to": ""
      }
    },
    {
      "id": 46,
      "datamaster": "Quotes",
      "userdata": {
        "Plans": "",
        "Title": "Dr",
        "First Name": "Benjamin",
        "Middle initials": "S.",
        "Family name": "Chavez",
        "Date of birth": "11/13/1937",
        "Gender": "Male",
        "Nationality": "Finland",
        "Country of residence": "Philippines",
        "Email": "bchavez19@cafepress.com",
        "Phone": "3-(499)730-5735",
        "Heart disorders": "true",
        "Endocrine disorders": "true",
        "Breathing disorders": "true",
        "Stomach disorders": "true",
        "Assigned to": ""
      }
    },
    {
      "id": 47,
      "datamaster": "Quotes",
      "userdata": {
        "Plans": "",
        "Title": "Rev",
        "First Name": "Jane",
        "Middle initials": "M.",
        "Family name": "Brown",
        "Date of birth": "11/8/1972",
        "Gender": "Female",
        "Nationality": "Ireland",
        "Country of residence": "China",
        "Email": "jbrown1a@nydailynews.com",
        "Phone": "3-(712)238-6846",
        "Heart disorders": "true",
        "Endocrine disorders": "false",
        "Breathing disorders": "true",
        "Stomach disorders": "true",
        "Assigned to": "steve"
      }
    },
    {
      "id": 48,
      "datamaster": "Quotes",
      "userdata": {
        "Plans": "",
        "Title": "Honorable",
        "First Name": "Emily",
        "Middle initials": "J.",
        "Family name": "Romero",
        "Date of birth": "12/2/1920",
        "Gender": "Female",
        "Nationality": "Philippines",
        "Country of residence": "Sweden",
        "Email": "eromero1b@bandcamp.com",
        "Phone": "8-(904)331-6956",
        "Heart disorders": "true",
        "Endocrine disorders": "false",
        "Breathing disorders": "true",
        "Stomach disorders": "true",
        "Assigned to": "john"
      }
    },
    {
      "id": 49,
      "datamaster": "Quotes",
      "userdata": {
        "Plans": "Medicines and Equipment",
        "Title": "Dr",
        "First Name": "John",
        "Middle initials": "J.",
        "Family name": "Mccoy",
        "Date of birth": "1/5/1913",
        "Gender": "Male",
        "Nationality": "Russia",
        "Country of residence": "Japan",
        "Email": "jmccoy1c@berkeley.edu",
        "Phone": "5-(392)670-5758",
        "Heart disorders": "true",
        "Endocrine disorders": "false",
        "Breathing disorders": "false",
        "Stomach disorders": "false",
        "Assigned to": ""
      }
    },
    {
      "id": 50,
      "datamaster": "Quotes",
      "userdata": {
        "Plans": "Medicines and Equipment",
        "Title": "Mrs",
        "First Name": "Bruce",
        "Middle initials": "M.",
        "Family name": "Ray",
        "Date of birth": "11/14/1995",
        "Gender": "Male",
        "Nationality": "Ukraine",
        "Country of residence": "Argentina",
        "Email": "bray1d@cbslocal.com",
        "Phone": "9-(296)029-9875",
        "Heart disorders": "false",
        "Endocrine disorders": "true",
        "Breathing disorders": "true",
        "Stomach disorders": "true",
        "Assigned to": ""
      }
    }
  ];

  jimData.datamasters["employees"] = [
    {
      "id": 1,
      "datamaster": "employees",
      "userdata": {
        "name": "richard",
        "password": "richard"
      }
    },
    {
      "id": 2,
      "datamaster": "employees",
      "userdata": {
        "name": "john",
        "password": "john"
      }
    },
    {
      "id": 3,
      "datamaster": "employees",
      "userdata": {
        "name": "steve",
        "password": "steve"
      }
    },
    {
      "id": 4,
      "datamaster": "employees",
      "userdata": {
        "name": "admin",
        "password": "medicalcare"
      }
    },
    {
      "id": 5,
      "datamaster": "employees",
      "userdata": {
        "name": "Rahma",
        "password": "rahma123"
      }
    }
  ];

  jimData.datamasters["login"] = [
    {
      "id": 1,
      "datamaster": "login",
      "userdata": {
        "user": "ibtissem",
        "password": "ibtissem123"
      }
    },
    {
      "id": 2,
      "datamaster": "login",
      "userdata": {
        "user": "rahma",
        "password": "rahma123"
      }
    }
  ];

  jimData.datamasters["Plans"] = [
    {
      "id": 1,
      "datamaster": "Plans",
      "userdata": {
        "Name": "Evacuation",
        "Price": "150",
        "Summary": "For a range of health screenings, vaccinations, dental and optical treatment",
        "Description": "For when you can't get the treatment you need in a local hospital.The Worldwide Evacuation option covers you for reasonable transport costs to the nearest suitable medical centre, when the treatment you need is not available nearby. Repatriation, which is also included, gives you the added option of returning to your home country or specified country of nationality, to be treated in familiar surroundings."
      }
    },
    {
      "id": 2,
      "datamaster": "Plans",
      "userdata": {
        "Name": "Medical Insurance",
        "Price": "100",
        "Summary": "For hospital treatment and overnight stays, plus related benefits",
        "Description": "For treatment received whilst staying in hospital, either overnight or as a day-case Worldwide Medical Insurance gives you the reassurance of covering essential hospital treatment you may need, whether in an emergency or a planned visit. All surgery, cancer treatment and advanced imaging, whether received whilst staying in hospital or as a visiting patient, are also included. You may have chosen this cover on its own, or together with any combination of our options."
      }
    },
    {
      "id": 3,
      "datamaster": "Plans",
      "userdata": {
        "Name": "Medical Plus",
        "Price": "50",
        "Summary": "For specialist treatment when you do not need to stay in hospital.",
        "Description": "Worldwide Medical Plus covers you for consultations with a doctor or specialist and medical treatments that do not require a hospital stay. These may include osteopathy or complementary therapies, for example. Some of these treatments or consultations may take place before or after a hospital stay, but many will be totally independent."
      }
    },
    {
      "id": 4,
      "datamaster": "Plans",
      "userdata": {
        "Name": "Medicines and Equipment",
        "Price": "130",
        "Summary": "For prescribed medicines and medical equipment",
        "Description": "For prescribed medicines and medical equipment. Often, treatment doesn't end when you leave the hospital or clinic or after you have seen a specialist. This option covers you for prescription medicines and the rental of medical appliances, such as oxygen supplies or wheelchairs. Our unique benefit for long-term prescriptions will also pay for any medicine required to manage chronic conditions such as asthma."
      }
    }
  ];

  jimData.datamasters["PatientDataGrid"] = [
    {
      "id": 1,
      "datamaster": "PatientDataGrid",
      "userdata": {
        "Numéro": "1",
        "Nom Patient": "Bedla",
        "Prénom Patient": "Rahma",
        "Date Naissance": "11/27/1995",
        "Observation": "Prothèse prochaine séance"
      }
    },
    {
      "id": 2,
      "datamaster": "PatientDataGrid",
      "userdata": {
        "Numéro": "2",
        "Nom Patient": "Bedla",
        "Prénom Patient": "Idris",
        "Date Naissance": "09/26/1994",
        "Observation": "sample text"
      }
    },
    {
      "id": 3,
      "datamaster": "PatientDataGrid",
      "userdata": {
        "Numéro": "3",
        "Nom Patient": "Bennacer",
        "Prénom Patient": "Ibtissem",
        "Date Naissance": "09/12/2011",
        "Observation": "sample text"
      }
    },
    {
      "id": 4,
      "datamaster": "PatientDataGrid",
      "userdata": {
        "Numéro": "4",
        "Nom Patient": "Ait Laoussine",
        "Prénom Patient": "Hanene",
        "Date Naissance": "09/12/2011",
        "Observation": "sample text"
      }
    },
    {
      "id": 5,
      "datamaster": "PatientDataGrid",
      "userdata": {
        "Numéro": "5",
        "Nom Patient": "Bedla",
        "Prénom Patient": "Houssem",
        "Date Naissance": "09/12/2011",
        "Observation": "sample text"
      }
    },
    {
      "id": 6,
      "datamaster": "PatientDataGrid",
      "userdata": {
        "Numéro": "6",
        "Nom Patient": "Benchafaa",
        "Prénom Patient": "Laatra",
        "Date Naissance": "07/13/1959",
        "Observation": "Détartrage semaine prochaine"
      }
    }
  ];

  jimData.isInitialized = true;
}jQuery("#simulation")
  .on("click", ".s-778d2193-93db-4a86-ad0f-592aaf71bc66 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-PatientDataGrid" ],
                    "value": {
                      "datatype": "datamaster",
                      "datamaster": "PatientDataGrid"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-PatientDataGrid" ],
                    "value": {
                      "action": "jimFilterData",
                      "parameter": {
                        "datatype": "datalist",
                        "datamaster": "PatientDataGrid",
                        "element": "#s-PatientDataGrid",
                        "value": {
                          "action": "jimAnd",
                          "parameter": [ {
                            "action": "jimAnd",
                            "parameter": [ {
                              "action": "jimAnd",
                              "parameter": [ {
                                "action": "jimAnd",
                                "parameter": [ {
                                  "action": "jimContains",
                                  "parameter": [ {
                                    "field": "Numéro"
                                  },{
                                    "datatype": "property",
                                    "target": "#s-Input_6",
                                    "property": "jimGetValue"
                                  } ]
                                },{
                                  "action": "jimContains",
                                  "parameter": [ {
                                    "field": "Nom Patient"
                                  },{
                                    "datatype": "property",
                                    "target": "#s-Input_7",
                                    "property": "jimGetValue"
                                  } ]
                                } ]
                              },{
                                "action": "jimContains",
                                "parameter": [ {
                                  "field": "Prénom Patient"
                                },{
                                  "datatype": "property",
                                  "target": "#s-Input_8",
                                  "property": "jimGetValue"
                                } ]
                              } ]
                            },{
                              "action": "jimContains",
                              "parameter": [ {
                                "field": "Date Naissance"
                              },{
                                "datatype": "property",
                                "target": "#s-Input_9",
                                "property": "jimGetValue"
                              } ]
                            } ]
                          },{
                            "action": "jimContains",
                            "parameter": [ {
                              "field": "Observation"
                            },{
                              "datatype": "property",
                              "target": "#s-Input_10",
                              "property": "jimGetValue"
                            } ]
                          } ]
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/8ebd9c72-6050-4337-bf89-2978db6b8cfa",
                    "popup": {
                      "width": 300,
                      "height": 200,
                      "iscentered": false,
                      "top": 20,
                      "left": 20,
                      "hasscrollbars": "yes",
                      "isresizable": "yes"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is(".s-Image_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "PatientDataGrid" ],
                    "value": {
                      "datatype": "datarow",
                      "datamaster": "PatientDataGrid",
                      "element": "#s-PatientDataGrid"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/92ae838d-3135-4b47-a6ee-4ef187ea62ef",
                    "popup": {
                      "width": 300,
                      "height": 200,
                      "iscentered": false,
                      "top": 20,
                      "left": 20,
                      "hasscrollbars": "yes",
                      "isresizable": "yes"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is(".s-Image_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "PatientDataGrid" ],
                    "value": {
                      "datatype": "datarow",
                      "datamaster": "PatientDataGrid",
                      "element": "#s-PatientDataGrid"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cd84153f-7f6e-479a-92c2-575c656303f6",
                    "popup": {
                      "width": 300,
                      "height": 200,
                      "iscentered": false,
                      "top": 20,
                      "left": 20,
                      "hasscrollbars": "yes",
                      "isresizable": "yes"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is(".s-Image_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimDeleteData",
                  "parameter": {
                    "datatype": "datarow",
                    "datamaster": "PatientDataGrid",
                    "element": "#s-PatientDataGrid"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNextPageData",
                  "parameter": {
                    "target": [ "#s-PatientDataGrid" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimPrevPageData",
                  "parameter": {
                    "target": [ "#s-PatientDataGrid" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimFirstPageData",
                  "parameter": {
                    "target": [ "#s-PatientDataGrid" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimLastPageData",
                  "parameter": {
                    "target": [ "#s-PatientDataGrid" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
    jFirer.parents("tr.datarow").trigger("click", true);
  });jQuery("#simulation")
  .on("click", ".s-92ae838d-3135-4b47-a6ee-4ef187ea62ef .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/778d2193-93db-4a86-ad0f-592aaf71bc66"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageload", ".s-92ae838d-3135-4b47-a6ee-4ef187ea62ef .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_1" ],
                    "value": {
                      "action": "jimSelectData",
                      "parameter": {
                        "datatype": "variable",
                        "element": "PatientDataGrid",
                        "value": {
                          "field": "Numéro"
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_2" ],
                    "value": {
                      "action": "jimSelectData",
                      "parameter": {
                        "datatype": "variable",
                        "element": "PatientDataGrid",
                        "value": {
                          "field": "Nom Patient"
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_3" ],
                    "value": {
                      "action": "jimSelectData",
                      "parameter": {
                        "datatype": "variable",
                        "element": "PatientDataGrid",
                        "value": {
                          "field": "Prénom Patient"
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_4" ],
                    "value": {
                      "action": "jimSelectData",
                      "parameter": {
                        "datatype": "variable",
                        "element": "PatientDataGrid",
                        "value": {
                          "field": "Date Naissance"
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_5" ],
                    "value": {
                      "action": "jimSelectData",
                      "parameter": {
                        "datatype": "variable",
                        "element": "PatientDataGrid",
                        "value": {
                          "field": "Observation"
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });jQuery("#simulation")
  .on("click", ".s-6d2d7ab8-04ab-49f1-83b9-cfd2468fabe8 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-login" ],
                    "value": {
                      "datatype": "datamaster",
                      "datamaster": "login"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-login" ],
                    "value": {
                      "action": "jimFilterData",
                      "parameter": {
                        "datatype": "datalist",
                        "datamaster": "login",
                        "element": "#s-login",
                        "value": {
                          "action": "jimAnd",
                          "parameter": [ {
                            "action": "jimContains",
                            "parameter": [ {
                              "field": "user"
                            },{
                              "datatype": "property",
                              "target": "#s-Input_3",
                              "property": "jimGetValue"
                            } ]
                          },{
                            "action": "jimContains",
                            "parameter": [ {
                              "field": "password"
                            },{
                              "datatype": "property",
                              "target": "#s-Input_4",
                              "property": "jimGetValue"
                            } ]
                          } ]
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/5e679026-c831-4fc9-a5dd-9e8c97172b74",
                    "popup": {
                      "width": 300,
                      "height": 200,
                      "iscentered": false,
                      "top": 20,
                      "left": 20,
                      "hasscrollbars": "yes",
                      "isresizable": "yes"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is(".s-Image_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "login" ],
                    "value": {
                      "datatype": "datarow",
                      "datamaster": "login",
                      "element": "#s-login"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/af92aa72-dca8-41d3-8fd8-7df6685c6618",
                    "popup": {
                      "width": 300,
                      "height": 200,
                      "iscentered": false,
                      "top": 20,
                      "left": 20,
                      "hasscrollbars": "yes",
                      "isresizable": "yes"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is(".s-Image_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "login" ],
                    "value": {
                      "datatype": "datarow",
                      "datamaster": "login",
                      "element": "#s-login"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/56cc956b-de07-41c2-96f5-64ec7af5467c",
                    "popup": {
                      "width": 300,
                      "height": 200,
                      "iscentered": false,
                      "top": 20,
                      "left": 20,
                      "hasscrollbars": "yes",
                      "isresizable": "yes"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is(".s-Image_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimDeleteData",
                  "parameter": {
                    "datatype": "datarow",
                    "datamaster": "login",
                    "element": "#s-login"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNextPageData",
                  "parameter": {
                    "target": [ "#s-login" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimPrevPageData",
                  "parameter": {
                    "target": [ "#s-login" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimFirstPageData",
                  "parameter": {
                    "target": [ "#s-login" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimLastPageData",
                  "parameter": {
                    "target": [ "#s-login" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
    jFirer.parents("tr.datarow").trigger("click", true);
  });jQuery("#simulation")
  .on("click", ".s-d59a9587-c981-42a2-a93d-cd5e34dcb3a9 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Two-line-item_21")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/1c4f49c6-a53c-4d15-bb26-529d86cf97d5"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Two-line-item_35")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9d1b7a89-43da-48f3-9a62-02728d968463"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Menu_item_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/6f3e98f0-6f51-40b0-84eb-8e0a743f0c3b"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_71")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/6f3e98f0-6f51-40b0-84eb-8e0a743f0c3b"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is(".s-Input_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/02e8f840-27b7-4797-b1f5-d637b2e90d79"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is(".s-Image_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "PatientDataGrid" ],
                    "value": {
                      "datatype": "datarow",
                      "datamaster": "PatientDataGrid",
                      "element": "#s-PatientDataGrid"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cd84153f-7f6e-479a-92c2-575c656303f6",
                    "popup": {
                      "width": 300,
                      "height": 200,
                      "iscentered": false,
                      "top": 20,
                      "left": 20,
                      "hasscrollbars": "yes",
                      "isresizable": "yes"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is(".s-Image_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimDeleteData",
                  "parameter": {
                    "datatype": "datarow",
                    "datamaster": "PatientDataGrid",
                    "element": "#s-PatientDataGrid"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNextPageData",
                  "parameter": {
                    "target": [ "#s-PatientDataGrid" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimPrevPageData",
                  "parameter": {
                    "target": [ "#s-PatientDataGrid" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimFirstPageData",
                  "parameter": {
                    "target": [ "#s-PatientDataGrid" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimLastPageData",
                  "parameter": {
                    "target": [ "#s-PatientDataGrid" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-PatientDataGrid" ],
                    "value": {
                      "datatype": "datamaster",
                      "datamaster": "PatientDataGrid"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-PatientDataGrid" ],
                    "value": {
                      "action": "jimFilterData",
                      "parameter": {
                        "datatype": "datalist",
                        "datamaster": "PatientDataGrid",
                        "element": "#s-PatientDataGrid",
                        "value": {
                          "action": "jimAnd",
                          "parameter": [ {
                            "action": "jimAnd",
                            "parameter": [ {
                              "action": "jimAnd",
                              "parameter": [ {
                                "action": "jimAnd",
                                "parameter": [ {
                                  "action": "jimContains",
                                  "parameter": [ {
                                    "field": "Numéro"
                                  },{
                                    "datatype": "property",
                                    "target": "#s-Input_11",
                                    "property": "jimGetValue"
                                  } ]
                                },{
                                  "action": "jimContains",
                                  "parameter": [ {
                                    "field": "Nom Patient"
                                  },{
                                    "datatype": "property",
                                    "target": "#s-Input_12",
                                    "property": "jimGetValue"
                                  } ]
                                } ]
                              },{
                                "action": "jimContains",
                                "parameter": [ {
                                  "field": "Prénom Patient"
                                },{
                                  "datatype": "property",
                                  "target": "#s-Input_13",
                                  "property": "jimGetValue"
                                } ]
                              } ]
                            },{
                              "action": "jimContains",
                              "parameter": [ {
                                "field": "Date Naissance"
                              },{
                                "datatype": "property",
                                "target": "#s-Input_14",
                                "property": "jimGetValue"
                              } ]
                            } ]
                          },{
                            "action": "jimContains",
                            "parameter": [ {
                              "field": "Observation"
                            },{
                              "datatype": "property",
                              "target": "#s-Input_15",
                              "property": "jimGetValue"
                            } ]
                          } ]
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/8ebd9c72-6050-4337-bf89-2978db6b8cfa"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/fbb22a47-2718-49a3-a1e6-f712249f5120"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_24")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9d1b7a89-43da-48f3-9a62-02728d968463"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_25")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d1980101-0a74-45e0-8bfb-dcd9d9f5b8a6"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_26")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/4e0010c3-9d28-46a7-a703-cbdf8ef39aaa"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
    jFirer.parents("tr.datarow").trigger("click", true);
  })
  .on("pageload", ".s-d59a9587-c981-42a2-a93d-cd5e34dcb3a9 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_1" ],
                    "value": {
                      "datatype": "variable",
                      "element": "nbr"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_3" ],
                    "value": {
                      "datatype": "variable",
                      "element": "name"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageunload", ".s-d59a9587-c981-42a2-a93d-cd5e34dcb3a9 .pageunload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is(".s-Input_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "nbr" ],
                    "value": {
                      "datatype": "property",
                      "target": ".s-Input_6",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });jQuery("#simulation")
  .on("click", ".s-d69a4cbf-1844-45c3-9db6-887cad5a0d1b .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimUpdateData",
                  "parameter": {
                    "datatype": "variable",
                    "element": "login",
                    "fields": {
                      "user": {
                        "datatype": "property",
                        "target": "#s-Input_1",
                        "property": "jimGetValue"
                      },
                      "password": {
                        "datatype": "property",
                        "target": "#s-Input_2",
                        "property": "jimGetValue"
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/5d024353-5558-47f0-81d7-4ee7aa581184"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/5d024353-5558-47f0-81d7-4ee7aa581184"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageload", ".s-d69a4cbf-1844-45c3-9db6-887cad5a0d1b .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_2" ],
                    "value": {
                      "action": "jimSelectData",
                      "parameter": {
                        "datatype": "variable",
                        "element": "login",
                        "value": {
                          "field": "password"
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_1" ],
                    "value": {
                      "action": "jimSelectData",
                      "parameter": {
                        "datatype": "variable",
                        "element": "login",
                        "value": {
                          "field": "user"
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });jQuery("#simulation")
  .on("click", ".s-c6af2bd8-0711-4b95-89f1-8a9c0036ded7 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/5d024353-5558-47f0-81d7-4ee7aa581184"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageload", ".s-c6af2bd8-0711-4b95-89f1-8a9c0036ded7 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_2" ],
                    "value": {
                      "action": "jimSelectData",
                      "parameter": {
                        "datatype": "variable",
                        "element": "login",
                        "value": {
                          "field": "password"
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_1" ],
                    "value": {
                      "action": "jimSelectData",
                      "parameter": {
                        "datatype": "variable",
                        "element": "login",
                        "value": {
                          "field": "user"
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });jQuery("#simulation")
  .on("click", ".s-8ebd9c72-6050-4337-bf89-2978db6b8cfa .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimCreateData",
                  "parameter": {
                    "datatype": "datamaster",
                    "datamaster": "PatientDataGrid",
                    "fields": {
                      "Numéro": {
                        "action": "jimPlus",
                        "parameter": [ {
                          "action": "jimMaxData",
                          "parameter": {
                            "datatype": "datamaster",
                            "datamaster": "PatientDataGrid",
                            "value": {
                              "field": "Numéro"
                            }
                          }
                        },"1" ]
                      },
                      "Nom Patient": {
                        "datatype": "property",
                        "target": "#s-Input_2",
                        "property": "jimGetValue"
                      },
                      "Prénom Patient": {
                        "datatype": "property",
                        "target": "#s-Input_3",
                        "property": "jimGetValue"
                      },
                      "Date Naissance": {
                        "datatype": "property",
                        "target": "#s-Input_4",
                        "property": "jimGetValue"
                      },
                      "Observation": {
                        "datatype": "property",
                        "target": "#s-Input_5",
                        "property": "jimGetValue"
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d59a9587-c981-42a2-a93d-cd5e34dcb3a9"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d59a9587-c981-42a2-a93d-cd5e34dcb3a9"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });jQuery("#simulation")
  .on("click", ".s-6f3e98f0-6f51-40b0-84eb-8e0a743f0c3b .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Two-line-item_21")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/1c4f49c6-a53c-4d15-bb26-529d86cf97d5"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Two-line-item_35")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9d1b7a89-43da-48f3-9a62-02728d968463"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d59a9587-c981-42a2-a93d-cd5e34dcb3a9"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/967f078a-a1ed-4ea3-b23b-a865ef80368f"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/fbb22a47-2718-49a3-a1e6-f712249f5120"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_24")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9d1b7a89-43da-48f3-9a62-02728d968463"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_25")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d1980101-0a74-45e0-8bfb-dcd9d9f5b8a6"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_26")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/4e0010c3-9d28-46a7-a703-cbdf8ef39aaa"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageload", ".s-6f3e98f0-6f51-40b0-84eb-8e0a743f0c3b .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Text_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_3" ],
                    "value": {
                      "datatype": "variable",
                      "element": "name"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });jQuery("#simulation")
  .on("click", ".s-4ced58b7-bdbc-43a0-bb6b-443b52e00007 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimCreateData",
                  "parameter": {
                    "datatype": "datamaster",
                    "datamaster": "SoinDataMaster",
                    "fields": {
                      "Numéro": {
                        "action": "jimPlus",
                        "parameter": [ {
                          "action": "jimMaxData",
                          "parameter": {
                            "datatype": "datamaster",
                            "datamaster": "SoinDataMaster",
                            "value": {
                              "field": "Numéro"
                            }
                          }
                        },"1" ]
                      },
                      "Dent": {
                        "datatype": "property",
                        "target": "#s-Input_2",
                        "property": "jimGetValue"
                      },
                      "Type Soin": {
                        "datatype": "property",
                        "target": "#s-Input_3",
                        "property": "jimGetValue"
                      },
                      "Acte": {
                        "datatype": "property",
                        "target": "#s-Input_4",
                        "property": "jimGetValue"
                      },
                      "Médecin": {
                        "datatype": "property",
                        "target": "#s-Input_5",
                        "property": "jimGetValue"
                      },
                      "Coût Total": {
                        "datatype": "property",
                        "target": "#s-Input_6",
                        "property": "jimGetValue"
                      },
                      "Versemenet": {
                        "datatype": "property",
                        "target": "#s-Input_7",
                        "property": "jimGetValue"
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/0447e155-5a47-452b-95d9-5d9daad2ce6e"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/0447e155-5a47-452b-95d9-5d9daad2ce6e"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });jQuery("#simulation")
  .on("click", ".s-3b9b988f-6a4e-40e9-b0fd-28bdbe5193e3 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimUpdateData",
                  "parameter": {
                    "datatype": "variable",
                    "element": "SoinDataMaster",
                    "fields": {
                      "Numéro": {
                        "datatype": "property",
                        "target": "#s-Input_1",
                        "property": "jimGetValue"
                      },
                      "Dent": {
                        "datatype": "property",
                        "target": "#s-Input_2",
                        "property": "jimGetValue"
                      },
                      "Type Soin": {
                        "datatype": "property",
                        "target": "#s-Input_3",
                        "property": "jimGetValue"
                      },
                      "Acte": {
                        "datatype": "property",
                        "target": "#s-Input_4",
                        "property": "jimGetValue"
                      },
                      "Médecin": {
                        "datatype": "property",
                        "target": "#s-Input_5",
                        "property": "jimGetValue"
                      },
                      "Coût Total": {
                        "datatype": "property",
                        "target": "#s-Input_6",
                        "property": "jimGetValue"
                      },
                      "Versemenet": {
                        "datatype": "property",
                        "target": "#s-Input_7",
                        "property": "jimGetValue"
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/0447e155-5a47-452b-95d9-5d9daad2ce6e"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/0447e155-5a47-452b-95d9-5d9daad2ce6e"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageload", ".s-3b9b988f-6a4e-40e9-b0fd-28bdbe5193e3 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_1" ],
                    "value": {
                      "action": "jimSelectData",
                      "parameter": {
                        "datatype": "variable",
                        "element": "SoinDataMaster",
                        "value": {
                          "field": "Numéro"
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_2" ],
                    "value": {
                      "action": "jimSelectData",
                      "parameter": {
                        "datatype": "variable",
                        "element": "SoinDataMaster",
                        "value": {
                          "field": "Dent"
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_3" ],
                    "value": {
                      "action": "jimSelectData",
                      "parameter": {
                        "datatype": "variable",
                        "element": "SoinDataMaster",
                        "value": {
                          "field": "Type Soin"
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_4" ],
                    "value": {
                      "action": "jimSelectData",
                      "parameter": {
                        "datatype": "variable",
                        "element": "SoinDataMaster",
                        "value": {
                          "field": "Acte"
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_5" ],
                    "value": {
                      "action": "jimSelectData",
                      "parameter": {
                        "datatype": "variable",
                        "element": "SoinDataMaster",
                        "value": {
                          "field": "Médecin"
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_6" ],
                    "value": {
                      "action": "jimSelectData",
                      "parameter": {
                        "datatype": "variable",
                        "element": "SoinDataMaster",
                        "value": {
                          "field": "Coût Total"
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_7" ],
                    "value": {
                      "action": "jimSelectData",
                      "parameter": {
                        "datatype": "variable",
                        "element": "SoinDataMaster",
                        "value": {
                          "field": "Versemenet"
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });jQuery("#simulation")
  .on("click", ".s-1c172a7b-2785-4d33-a1b9-fd5bced26dde .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimDeleteData",
                  "parameter": {
                    "datatype": "variable",
                    "element": "PatientDataGrid"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d59a9587-c981-42a2-a93d-cd5e34dcb3a9"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/778d2193-93db-4a86-ad0f-592aaf71bc66"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });jQuery("#simulation")
  .on("click", ".s-1c4f49c6-a53c-4d15-bb26-529d86cf97d5 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Two-line-item_21")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/6f3e98f0-6f51-40b0-84eb-8e0a743f0c3b"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Two-line-item_35")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9d1b7a89-43da-48f3-9a62-02728d968463"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/fbb22a47-2718-49a3-a1e6-f712249f5120"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_24")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9d1b7a89-43da-48f3-9a62-02728d968463"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_25")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d1980101-0a74-45e0-8bfb-dcd9d9f5b8a6"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_26")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/4e0010c3-9d28-46a7-a703-cbdf8ef39aaa"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageload", ".s-1c4f49c6-a53c-4d15-bb26-529d86cf97d5 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Text_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_3" ],
                    "value": {
                      "datatype": "variable",
                      "element": "name"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });jQuery("#simulation")
  .on("click", ".s-cd84153f-7f6e-479a-92c2-575c656303f6 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimUpdateData",
                  "parameter": {
                    "datatype": "variable",
                    "element": "PatientDataGrid",
                    "fields": {
                      "Numéro": null,
                      "Nom Patient": {
                        "datatype": "property",
                        "target": "#s-Input_2",
                        "property": "jimGetValue"
                      },
                      "Prénom Patient": {
                        "datatype": "property",
                        "target": "#s-Input_3",
                        "property": "jimGetValue"
                      },
                      "Date Naissance": {
                        "datatype": "property",
                        "target": "#s-Input_4",
                        "property": "jimGetValue"
                      },
                      "Observation": {
                        "datatype": "property",
                        "target": "#s-Input_5",
                        "property": "jimGetValue"
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d59a9587-c981-42a2-a93d-cd5e34dcb3a9"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d59a9587-c981-42a2-a93d-cd5e34dcb3a9"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageload", ".s-cd84153f-7f6e-479a-92c2-575c656303f6 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_2" ],
                    "value": {
                      "action": "jimSelectData",
                      "parameter": {
                        "datatype": "variable",
                        "element": "PatientDataGrid",
                        "value": {
                          "field": "Nom Patient"
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_3" ],
                    "value": {
                      "action": "jimSelectData",
                      "parameter": {
                        "datatype": "variable",
                        "element": "PatientDataGrid",
                        "value": {
                          "field": "Prénom Patient"
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_4" ],
                    "value": {
                      "action": "jimSelectData",
                      "parameter": {
                        "datatype": "variable",
                        "element": "PatientDataGrid",
                        "value": {
                          "field": "Date Naissance"
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_5" ],
                    "value": {
                      "action": "jimSelectData",
                      "parameter": {
                        "datatype": "variable",
                        "element": "PatientDataGrid",
                        "value": {
                          "field": "Observation"
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });jQuery("#simulation")
  .on("click", ".s-fd20adf0-5afd-4d50-af13-07534c210383 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimCreateData",
                  "parameter": {
                    "datatype": "datamaster",
                    "datamaster": "login",
                    "fields": {
                      "user": {
                        "datatype": "property",
                        "target": "#s-Input_1",
                        "property": "jimGetValue"
                      },
                      "password": {
                        "datatype": "property",
                        "target": "#s-Input_2",
                        "property": "jimGetValue"
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/5d024353-5558-47f0-81d7-4ee7aa581184"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/5d024353-5558-47f0-81d7-4ee7aa581184"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });jQuery("#simulation")
  .on("click", ".s-e4d54d0e-c142-4798-9b6d-5f8e454cd47b .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Two-line-item_21")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/1c4f49c6-a53c-4d15-bb26-529d86cf97d5"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Two-line-item_35")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9d1b7a89-43da-48f3-9a62-02728d968463"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Menu_item_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/02e8f840-27b7-4797-b1f5-d637b2e90d79"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Menu_item_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/8cd12e76-df4a-4aaa-b195-c0e1ca1794ab"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/fbb22a47-2718-49a3-a1e6-f712249f5120"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_24")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9d1b7a89-43da-48f3-9a62-02728d968463"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_25")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d1980101-0a74-45e0-8bfb-dcd9d9f5b8a6"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_26")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/4e0010c3-9d28-46a7-a703-cbdf8ef39aaa"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageload", ".s-e4d54d0e-c142-4798-9b6d-5f8e454cd47b .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Text_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_3" ],
                    "value": {
                      "datatype": "variable",
                      "element": "name"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });jQuery("#simulation")
  .on("click", ".s-d1980101-0a74-45e0-8bfb-dcd9d9f5b8a6 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_16")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "datatype": "property",
                "target": "#s-Login",
                "property": "jimIsVisible"
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Login" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Login" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/fbb22a47-2718-49a3-a1e6-f712249f5120"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9d1b7a89-43da-48f3-9a62-02728d968463"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/4e0010c3-9d28-46a7-a703-cbdf8ef39aaa"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "action": "jimCount",
                  "parameter": [ {
                    "action": "jimFilterData",
                    "parameter": {
                      "datatype": "datamaster",
                      "datamaster": "login",
                      "value": {
                        "action": "jimAnd",
                        "parameter": [ {
                          "action": "jimEquals",
                          "parameter": [ {
                            "field": "user"
                          },{
                            "datatype": "property",
                            "target": "#s-Input_1",
                            "property": "jimGetValue"
                          } ]
                        },{
                          "action": "jimEquals",
                          "parameter": [ {
                            "field": "password"
                          },{
                            "datatype": "property",
                            "target": "#s-Input_2",
                            "property": "jimGetValue"
                          } ]
                        } ]
                      }
                    }
                  } ]
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/1c4f49c6-a53c-4d15-bb26-529d86cf97d5"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Message-dark" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Message-dark" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageunload", ".s-d1980101-0a74-45e0-8bfb-dcd9d9f5b8a6 .pageunload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "name" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_1",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });jQuery("#simulation")
  .on("click", ".s-b81af61c-0596-4e8a-b6cc-0b9d0265368a .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-SoinDataMaster" ],
                    "value": {
                      "datatype": "datamaster",
                      "datamaster": "SoinDataMaster"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-SoinDataMaster" ],
                    "value": {
                      "action": "jimFilterData",
                      "parameter": {
                        "datatype": "datalist",
                        "datamaster": "SoinDataMaster",
                        "element": "#s-SoinDataMaster",
                        "value": {
                          "action": "jimAnd",
                          "parameter": [ {
                            "action": "jimAnd",
                            "parameter": [ {
                              "action": "jimAnd",
                              "parameter": [ {
                                "action": "jimAnd",
                                "parameter": [ {
                                  "action": "jimAnd",
                                  "parameter": [ {
                                    "action": "jimAnd",
                                    "parameter": [ {
                                      "action": "jimContains",
                                      "parameter": [ {
                                        "field": "Numéro"
                                      },{
                                        "datatype": "property",
                                        "target": "#s-Input_8",
                                        "property": "jimGetValue"
                                      } ]
                                    },{
                                      "action": "jimContains",
                                      "parameter": [ {
                                        "field": "Dent"
                                      },{
                                        "datatype": "property",
                                        "target": "#s-Input_9",
                                        "property": "jimGetValue"
                                      } ]
                                    } ]
                                  },{
                                    "action": "jimContains",
                                    "parameter": [ {
                                      "field": "Type Soin"
                                    },{
                                      "datatype": "property",
                                      "target": "#s-Input_10",
                                      "property": "jimGetValue"
                                    } ]
                                  } ]
                                },{
                                  "action": "jimContains",
                                  "parameter": [ {
                                    "field": "Acte"
                                  },{
                                    "datatype": "property",
                                    "target": "#s-Input_11",
                                    "property": "jimGetValue"
                                  } ]
                                } ]
                              },{
                                "action": "jimContains",
                                "parameter": [ {
                                  "field": "Médecin"
                                },{
                                  "datatype": "property",
                                  "target": "#s-Input_12",
                                  "property": "jimGetValue"
                                } ]
                              } ]
                            },{
                              "action": "jimContains",
                              "parameter": [ {
                                "field": "Coût Total"
                              },{
                                "datatype": "property",
                                "target": "#s-Input_13",
                                "property": "jimGetValue"
                              } ]
                            } ]
                          },{
                            "action": "jimContains",
                            "parameter": [ {
                              "field": "Versemenet"
                            },{
                              "datatype": "property",
                              "target": "#s-Input_14",
                              "property": "jimGetValue"
                            } ]
                          } ]
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/4ced58b7-bdbc-43a0-bb6b-443b52e00007",
                    "popup": {
                      "width": 300,
                      "height": 200,
                      "iscentered": false,
                      "top": 20,
                      "left": 20,
                      "hasscrollbars": "yes",
                      "isresizable": "yes"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is(".s-Image_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "SoinDataMaster" ],
                    "value": {
                      "datatype": "datarow",
                      "datamaster": "SoinDataMaster",
                      "element": "#s-SoinDataMaster"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/3b9b988f-6a4e-40e9-b0fd-28bdbe5193e3",
                    "popup": {
                      "width": 300,
                      "height": 200,
                      "iscentered": false,
                      "top": 20,
                      "left": 20,
                      "hasscrollbars": "yes",
                      "isresizable": "yes"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is(".s-Image_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimDeleteData",
                  "parameter": {
                    "datatype": "datarow",
                    "datamaster": "SoinDataMaster",
                    "element": "#s-SoinDataMaster"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNextPageData",
                  "parameter": {
                    "target": [ "#s-SoinDataMaster" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimPrevPageData",
                  "parameter": {
                    "target": [ "#s-SoinDataMaster" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimFirstPageData",
                  "parameter": {
                    "target": [ "#s-SoinDataMaster" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_18")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimLastPageData",
                  "parameter": {
                    "target": [ "#s-SoinDataMaster" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
    jFirer.parents("tr.datarow").trigger("click", true);
  });jQuery("#simulation")
  .on("click", ".s-9d1b7a89-43da-48f3-9a62-02728d968463 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_23")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "datatype": "property",
                "target": "#s-Login",
                "property": "jimIsVisible"
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Login" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Login" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/fbb22a47-2718-49a3-a1e6-f712249f5120"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_26")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/4e0010c3-9d28-46a7-a703-cbdf8ef39aaa"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_28")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d1980101-0a74-45e0-8bfb-dcd9d9f5b8a6"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "action": "jimCount",
                  "parameter": [ {
                    "action": "jimFilterData",
                    "parameter": {
                      "datatype": "datamaster",
                      "datamaster": "login",
                      "value": {
                        "action": "jimAnd",
                        "parameter": [ {
                          "action": "jimEquals",
                          "parameter": [ {
                            "field": "user"
                          },{
                            "datatype": "property",
                            "target": "#s-Input_1",
                            "property": "jimGetValue"
                          } ]
                        },{
                          "action": "jimEquals",
                          "parameter": [ {
                            "field": "password"
                          },{
                            "datatype": "property",
                            "target": "#s-Input_2",
                            "property": "jimGetValue"
                          } ]
                        } ]
                      }
                    }
                  } ]
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/1c4f49c6-a53c-4d15-bb26-529d86cf97d5"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Message-dark" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Message-dark" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageunload", ".s-9d1b7a89-43da-48f3-9a62-02728d968463 .pageunload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "name" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_1",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });jQuery("#simulation")
  .on("click", ".s-af92aa72-dca8-41d3-8fd8-7df6685c6618 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/6d2d7ab8-04ab-49f1-83b9-cfd2468fabe8"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageload", ".s-af92aa72-dca8-41d3-8fd8-7df6685c6618 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_1" ],
                    "value": {
                      "action": "jimSelectData",
                      "parameter": {
                        "datatype": "variable",
                        "element": "login",
                        "value": {
                          "field": "user"
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_2" ],
                    "value": {
                      "action": "jimSelectData",
                      "parameter": {
                        "datatype": "variable",
                        "element": "login",
                        "value": {
                          "field": "password"
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });jQuery("#simulation")
  .on("click", ".s-699d2dd2-f446-420f-98b6-a1763009899b .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimDeleteData",
                  "parameter": {
                    "datatype": "variable",
                    "element": "SoinDataMaster"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b81af61c-0596-4e8a-b6cc-0b9d0265368a"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b81af61c-0596-4e8a-b6cc-0b9d0265368a"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });jQuery("#simulation")
  .on("click", ".s-02e8f840-27b7-4797-b1f5-d637b2e90d79 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Two-line-item_21")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/1c4f49c6-a53c-4d15-bb26-529d86cf97d5"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Two-line-item_35")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9d1b7a89-43da-48f3-9a62-02728d968463"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Menu_item_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/0447e155-5a47-452b-95d9-5d9daad2ce6e"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Menu_item_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/e4d54d0e-c142-4798-9b6d-5f8e454cd47b"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Menu_item_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/8cd12e76-df4a-4aaa-b195-c0e1ca1794ab"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_71")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d59a9587-c981-42a2-a93d-cd5e34dcb3a9"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_81")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimEnable",
                  "parameter": {
                    "target": [ "#s-Radio_button_1","#s-Input_2","#s-Input_3","#s-Input_7","#s-Input_4","#s-Input_9","#s-Radio_button_2","#s-Input_8","#s-Input_6","#s-Input_5","#s-Input_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Text_19" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/fbb22a47-2718-49a3-a1e6-f712249f5120"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_24")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9d1b7a89-43da-48f3-9a62-02728d968463"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_25")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d1980101-0a74-45e0-8bfb-dcd9d9f5b8a6"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_26")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/4e0010c3-9d28-46a7-a703-cbdf8ef39aaa"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimDisable",
                  "parameter": {
                    "target": [ "#s-Radio_button_1","#s-Input_2","#s-Input_3","#s-Input_7","#s-Input_4","#s-Input_9","#s-Radio_button_2","#s-Input_8","#s-Input_6","#s-Input_5","#s-Input_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Text_19" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageload", ".s-02e8f840-27b7-4797-b1f5-d637b2e90d79 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Text_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_3" ],
                    "value": {
                      "datatype": "variable",
                      "element": "name"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });jQuery("#simulation")
  .on("click", ".s-0447e155-5a47-452b-95d9-5d9daad2ce6e .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Menu_item_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/02e8f840-27b7-4797-b1f5-d637b2e90d79"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Menu_item_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/e4d54d0e-c142-4798-9b6d-5f8e454cd47b"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Menu_item_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/8cd12e76-df4a-4aaa-b195-c0e1ca1794ab"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_71")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d59a9587-c981-42a2-a93d-cd5e34dcb3a9"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-SoinDataMaster" ],
                    "value": {
                      "datatype": "datamaster",
                      "datamaster": "SoinDataMaster"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-SoinDataMaster" ],
                    "value": {
                      "action": "jimFilterData",
                      "parameter": {
                        "datatype": "datalist",
                        "datamaster": "SoinDataMaster",
                        "element": "#s-SoinDataMaster",
                        "value": {
                          "action": "jimAnd",
                          "parameter": [ {
                            "action": "jimAnd",
                            "parameter": [ {
                              "action": "jimAnd",
                              "parameter": [ {
                                "action": "jimAnd",
                                "parameter": [ {
                                  "action": "jimAnd",
                                  "parameter": [ {
                                    "action": "jimAnd",
                                    "parameter": [ {
                                      "action": "jimContains",
                                      "parameter": [ {
                                        "field": "Numéro"
                                      },{
                                        "datatype": "property",
                                        "target": "#s-Input_8",
                                        "property": "jimGetValue"
                                      } ]
                                    },{
                                      "action": "jimContains",
                                      "parameter": [ {
                                        "field": "Dent"
                                      },{
                                        "datatype": "property",
                                        "target": "#s-Input_9",
                                        "property": "jimGetValue"
                                      } ]
                                    } ]
                                  },{
                                    "action": "jimContains",
                                    "parameter": [ {
                                      "field": "Type Soin"
                                    },{
                                      "datatype": "property",
                                      "target": "#s-Input_10",
                                      "property": "jimGetValue"
                                    } ]
                                  } ]
                                },{
                                  "action": "jimContains",
                                  "parameter": [ {
                                    "field": "Acte"
                                  },{
                                    "datatype": "property",
                                    "target": "#s-Input_11",
                                    "property": "jimGetValue"
                                  } ]
                                } ]
                              },{
                                "action": "jimContains",
                                "parameter": [ {
                                  "field": "Médecin"
                                },{
                                  "datatype": "property",
                                  "target": "#s-Input_12",
                                  "property": "jimGetValue"
                                } ]
                              } ]
                            },{
                              "action": "jimContains",
                              "parameter": [ {
                                "field": "Coût Total"
                              },{
                                "datatype": "property",
                                "target": "#s-Input_13",
                                "property": "jimGetValue"
                              } ]
                            } ]
                          },{
                            "action": "jimContains",
                            "parameter": [ {
                              "field": "Versemenet"
                            },{
                              "datatype": "property",
                              "target": "#s-Input_14",
                              "property": "jimGetValue"
                            } ]
                          } ]
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/4ced58b7-bdbc-43a0-bb6b-443b52e00007",
                    "popup": {
                      "width": 300,
                      "height": 200,
                      "iscentered": false,
                      "top": 20,
                      "left": 20,
                      "hasscrollbars": "yes",
                      "isresizable": "yes"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is(".s-Image_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "SoinDataMaster" ],
                    "value": {
                      "datatype": "datarow",
                      "datamaster": "SoinDataMaster",
                      "element": "#s-SoinDataMaster"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/3b9b988f-6a4e-40e9-b0fd-28bdbe5193e3",
                    "popup": {
                      "width": 300,
                      "height": 200,
                      "iscentered": false,
                      "top": 20,
                      "left": 20,
                      "hasscrollbars": "yes",
                      "isresizable": "yes"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is(".s-Image_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimDeleteData",
                  "parameter": {
                    "datatype": "datarow",
                    "datamaster": "SoinDataMaster",
                    "element": "#s-SoinDataMaster"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNextPageData",
                  "parameter": {
                    "target": [ "#s-SoinDataMaster" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_20")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimPrevPageData",
                  "parameter": {
                    "target": [ "#s-SoinDataMaster" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_21")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimFirstPageData",
                  "parameter": {
                    "target": [ "#s-SoinDataMaster" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_22")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimLastPageData",
                  "parameter": {
                    "target": [ "#s-SoinDataMaster" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
    jFirer.parents("tr.datarow").trigger("click", true);
  })
  .on("pageload", ".s-0447e155-5a47-452b-95d9-5d9daad2ce6e .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Text_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_4" ],
                    "value": {
                      "datatype": "variable",
                      "element": "name"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });jQuery("#simulation")
  .on("click", ".s-98d9cda0-26f9-4ddd-81be-b6a5c51b0267 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimDeleteData",
                  "parameter": {
                    "datatype": "variable",
                    "element": "login"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/6d2d7ab8-04ab-49f1-83b9-cfd2468fabe8"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/6d2d7ab8-04ab-49f1-83b9-cfd2468fabe8"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });jQuery("#simulation")
  .on("click", ".s-967f078a-a1ed-4ea3-b23b-a865ef80368f .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-side-drawer-dialog" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "0"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "-306"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "easeInQuad",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Two-line-item_21")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/1c4f49c6-a53c-4d15-bb26-529d86cf97d5"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Two-line-item_35")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9d1b7a89-43da-48f3-9a62-02728d968463"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_71")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/6f3e98f0-6f51-40b0-84eb-8e0a743f0c3b"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/fbb22a47-2718-49a3-a1e6-f712249f5120"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_24")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9d1b7a89-43da-48f3-9a62-02728d968463"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_25")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d1980101-0a74-45e0-8bfb-dcd9d9f5b8a6"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_26")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/4e0010c3-9d28-46a7-a703-cbdf8ef39aaa"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageload", ".s-967f078a-a1ed-4ea3-b23b-a865ef80368f .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Text_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_3" ],
                    "value": {
                      "datatype": "variable",
                      "element": "name"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_4" ],
                    "value": {
                      "datatype": "variable",
                      "element": "name"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });jQuery("#simulation")
  .on("click", ".s-8cd12e76-df4a-4aaa-b195-c0e1ca1794ab .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Menu_item_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/02e8f840-27b7-4797-b1f5-d637b2e90d79"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Menu_item_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/0447e155-5a47-452b-95d9-5d9daad2ce6e"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Menu_item_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/e4d54d0e-c142-4798-9b6d-5f8e454cd47b"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/fbb22a47-2718-49a3-a1e6-f712249f5120"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_24")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9d1b7a89-43da-48f3-9a62-02728d968463"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_25")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d1980101-0a74-45e0-8bfb-dcd9d9f5b8a6"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_26")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/4e0010c3-9d28-46a7-a703-cbdf8ef39aaa"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageload", ".s-8cd12e76-df4a-4aaa-b195-c0e1ca1794ab .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Text_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_3" ],
                    "value": {
                      "datatype": "variable",
                      "element": "name"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_4" ],
                    "value": {
                      "datatype": "variable",
                      "element": "name"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });jQuery("#simulation")
  .on("click", ".s-5e679026-c831-4fc9-a5dd-9e8c97172b74 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimCreateData",
                  "parameter": {
                    "datatype": "datamaster",
                    "datamaster": "login",
                    "fields": {
                      "user": {
                        "datatype": "property",
                        "target": "#s-Input_1",
                        "property": "jimGetValue"
                      },
                      "password": {
                        "datatype": "property",
                        "target": "#s-Input_2",
                        "property": "jimGetValue"
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/6d2d7ab8-04ab-49f1-83b9-cfd2468fabe8"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/6d2d7ab8-04ab-49f1-83b9-cfd2468fabe8"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });jQuery("#simulation")
  .on("click", ".s-56cc956b-de07-41c2-96f5-64ec7af5467c .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimUpdateData",
                  "parameter": {
                    "datatype": "variable",
                    "element": "login",
                    "fields": {
                      "user": {
                        "datatype": "property",
                        "target": "#s-Input_1",
                        "property": "jimGetValue"
                      },
                      "password": {
                        "datatype": "property",
                        "target": "#s-Input_2",
                        "property": "jimGetValue"
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/6d2d7ab8-04ab-49f1-83b9-cfd2468fabe8"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/6d2d7ab8-04ab-49f1-83b9-cfd2468fabe8"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageload", ".s-56cc956b-de07-41c2-96f5-64ec7af5467c .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_1" ],
                    "value": {
                      "action": "jimSelectData",
                      "parameter": {
                        "datatype": "variable",
                        "element": "login",
                        "value": {
                          "field": "user"
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_2" ],
                    "value": {
                      "action": "jimSelectData",
                      "parameter": {
                        "datatype": "variable",
                        "element": "login",
                        "value": {
                          "field": "password"
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });jQuery("#simulation")
  .on("click", ".s-4e0010c3-9d28-46a7-a703-cbdf8ef39aaa .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_6",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Text_17" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Text_18" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-4e0010c3-9d28-46a7-a703-cbdf8ef39aaa #s-Line_6": {
                      "attributes": {
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#FF0000",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "0px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#000000",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-4e0010c3-9d28-46a7-a703-cbdf8ef39aaa #s-Line_6": {
                      "attributes-ie": {
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#FF0000",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "0px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#000000",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-4e0010c3-9d28-46a7-a703-cbdf8ef39aaa #s-Line_6": {
                      "attributes-ie": {
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#FF0000",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "0px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#000000",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_7",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Text_19" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Text_20" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-4e0010c3-9d28-46a7-a703-cbdf8ef39aaa #s-Line_8": {
                      "attributes": {
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#FF0000",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "0px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#000000",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-4e0010c3-9d28-46a7-a703-cbdf8ef39aaa #s-Line_8": {
                      "attributes-ie": {
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#FF0000",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "0px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#000000",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-4e0010c3-9d28-46a7-a703-cbdf8ef39aaa #s-Line_8": {
                      "attributes-ie": {
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#FF0000",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "0px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#000000",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimNot",
                "parameter": [ {
                  "action": "jimRegExp",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_7",
                    "property": "jimGetValue"
                  },"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_19" ],
                    "value": "This is not a valid email"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Text_20" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Text_19" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-4e0010c3-9d28-46a7-a703-cbdf8ef39aaa #s-Line_8": {
                      "attributes": {
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#FF0000",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "0px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#000000",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-4e0010c3-9d28-46a7-a703-cbdf8ef39aaa #s-Line_8": {
                      "attributes-ie": {
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#FF0000",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "0px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#000000",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-4e0010c3-9d28-46a7-a703-cbdf8ef39aaa #s-Line_8": {
                      "attributes-ie": {
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#FF0000",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "0px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#000000",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimAnd",
                  "parameter": [ {
                    "action": "jimNotEquals",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Input_6",
                      "property": "jimGetValue"
                    },"" ]
                  },{
                    "action": "jimNotEquals",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Input_7",
                      "property": "jimGetValue"
                    },"" ]
                  } ]
                },{
                  "action": "jimRegExp",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_7",
                    "property": "jimGetValue"
                  },"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Text_16" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 1000
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Text_16" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_3" ],
                    "value": "Phone Number"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_4" ],
                    "value": "City"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_5" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_7" ],
                    "value": "Email*"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_6" ],
                    "value": "Name*"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_16")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "datatype": "property",
                "target": "#s-Login",
                "property": "jimIsVisible"
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Login" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Login" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/fbb22a47-2718-49a3-a1e6-f712249f5120"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9d1b7a89-43da-48f3-9a62-02728d968463"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d1980101-0a74-45e0-8bfb-dcd9d9f5b8a6"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "action": "jimCount",
                  "parameter": [ {
                    "action": "jimFilterData",
                    "parameter": {
                      "datatype": "datamaster",
                      "datamaster": "login",
                      "value": {
                        "action": "jimAnd",
                        "parameter": [ {
                          "action": "jimEquals",
                          "parameter": [ {
                            "field": "user"
                          },{
                            "datatype": "property",
                            "target": "#s-Input_1",
                            "property": "jimGetValue"
                          } ]
                        },{
                          "action": "jimEquals",
                          "parameter": [ {
                            "field": "password"
                          },{
                            "datatype": "property",
                            "target": "#s-Input_2",
                            "property": "jimGetValue"
                          } ]
                        } ]
                      }
                    }
                  } ]
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/1c4f49c6-a53c-4d15-bb26-529d86cf97d5"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Message-dark" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Message-dark" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageunload", ".s-4e0010c3-9d28-46a7-a703-cbdf8ef39aaa .pageunload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "name" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_1",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusin", ".s-4e0010c3-9d28-46a7-a703-cbdf8ef39aaa .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Line_2" ],
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 200,
                      "direction": "left"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-4e0010c3-9d28-46a7-a703-cbdf8ef39aaa #s-Input_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11.0pt"
                      }
                    }
                  },{
                    "#s-4e0010c3-9d28-46a7-a703-cbdf8ef39aaa #s-Input_3 input": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Light',Arial",
                        "font-size": "11.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_3",
                  "property": "jimGetValue"
                },"Phone Number" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_3" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Line_4" ],
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 200,
                      "direction": "left"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-4e0010c3-9d28-46a7-a703-cbdf8ef39aaa #s-Input_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11.0pt"
                      }
                    }
                  },{
                    "#s-4e0010c3-9d28-46a7-a703-cbdf8ef39aaa #s-Input_4 input": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Light',Arial",
                        "font-size": "11.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_4",
                  "property": "jimGetValue"
                },"City" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_4" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_5" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_6")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_6",
                  "property": "jimGetValue"
                },"Name *" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_6" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-4e0010c3-9d28-46a7-a703-cbdf8ef39aaa #s-Line_6": {
                      "attributes": {
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "0px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#000000",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-4e0010c3-9d28-46a7-a703-cbdf8ef39aaa #s-Line_6": {
                      "attributes-ie": {
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "0px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#000000",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-4e0010c3-9d28-46a7-a703-cbdf8ef39aaa #s-Line_6": {
                      "attributes-ie": {
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "0px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#000000",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Line_6" ],
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 200,
                      "direction": "left"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-4e0010c3-9d28-46a7-a703-cbdf8ef39aaa #s-Input_6 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11.0pt"
                      }
                    }
                  },{
                    "#s-4e0010c3-9d28-46a7-a703-cbdf8ef39aaa #s-Input_6 input": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "11.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_7")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_7",
                  "property": "jimGetValue"
                },"Email *" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_7" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-4e0010c3-9d28-46a7-a703-cbdf8ef39aaa #s-Line_8": {
                      "attributes": {
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "0px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#000000",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-4e0010c3-9d28-46a7-a703-cbdf8ef39aaa #s-Line_8": {
                      "attributes-ie": {
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "0px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#000000",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#s-4e0010c3-9d28-46a7-a703-cbdf8ef39aaa #s-Line_8": {
                      "attributes-ie": {
                        "border-top-width": "2px",
                        "border-top-style": "solid",
                        "border-top-color": "#D9D9D9",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "0px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#000000",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Line_8" ],
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 200,
                      "direction": "left"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-4e0010c3-9d28-46a7-a703-cbdf8ef39aaa #s-Input_7 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11.0pt"
                      }
                    }
                  },{
                    "#s-4e0010c3-9d28-46a7-a703-cbdf8ef39aaa #s-Input_7 input": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "11.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusout", ".s-4e0010c3-9d28-46a7-a703-cbdf8ef39aaa .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_3")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_3",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_3" ],
                    "value": "Phone Number"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Line_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-4e0010c3-9d28-46a7-a703-cbdf8ef39aaa #s-Input_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11.0pt"
                      }
                    }
                  },{
                    "#s-4e0010c3-9d28-46a7-a703-cbdf8ef39aaa #s-Input_3 input": {
                      "attributes": {
                        "color": "#808080",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Light',Arial",
                        "font-size": "11.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_4",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_4" ],
                    "value": "City"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Line_4" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-4e0010c3-9d28-46a7-a703-cbdf8ef39aaa #s-Input_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11.0pt"
                      }
                    }
                  },{
                    "#s-4e0010c3-9d28-46a7-a703-cbdf8ef39aaa #s-Input_4 input": {
                      "attributes": {
                        "color": "#808080",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Light',Arial",
                        "font-size": "11.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_6")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_6",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_6" ],
                    "value": "Name *"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-4e0010c3-9d28-46a7-a703-cbdf8ef39aaa #s-Text_17": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-4e0010c3-9d28-46a7-a703-cbdf8ef39aaa #s-Text_17 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-4e0010c3-9d28-46a7-a703-cbdf8ef39aaa #s-Text_17 span": {
                      "attributes": {
                        "color": "#666666",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "8.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-4e0010c3-9d28-46a7-a703-cbdf8ef39aaa #s-Text_18": {
                      "attributes": {
                        "font-size": "14.0pt",
                        "font-family": "'materialdesignjim-Regular',Arial"
                      }
                    }
                  },{
                    "#s-4e0010c3-9d28-46a7-a703-cbdf8ef39aaa #s-Text_18 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-4e0010c3-9d28-46a7-a703-cbdf8ef39aaa #s-Text_18 span": {
                      "attributes": {
                        "color": "#666666",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "'materialdesignjim-Regular',Arial",
                        "font-size": "14.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Line_6" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-4e0010c3-9d28-46a7-a703-cbdf8ef39aaa #s-Input_6 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11.0pt"
                      }
                    }
                  },{
                    "#s-4e0010c3-9d28-46a7-a703-cbdf8ef39aaa #s-Input_6 input": {
                      "attributes": {
                        "color": "#808080",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "11.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_7")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_7",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_7" ],
                    "value": "Name *"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-4e0010c3-9d28-46a7-a703-cbdf8ef39aaa #s-Text_19": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-4e0010c3-9d28-46a7-a703-cbdf8ef39aaa #s-Text_19 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-4e0010c3-9d28-46a7-a703-cbdf8ef39aaa #s-Text_19 span": {
                      "attributes": {
                        "color": "#666666",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "8.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-4e0010c3-9d28-46a7-a703-cbdf8ef39aaa #s-Text_20": {
                      "attributes": {
                        "font-size": "14.0pt",
                        "font-family": "'materialdesignjim-Regular',Arial"
                      }
                    }
                  },{
                    "#s-4e0010c3-9d28-46a7-a703-cbdf8ef39aaa #s-Text_20 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-4e0010c3-9d28-46a7-a703-cbdf8ef39aaa #s-Text_20 span": {
                      "attributes": {
                        "color": "#666666",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "'materialdesignjim-Regular',Arial",
                        "font-size": "14.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Line_8" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-4e0010c3-9d28-46a7-a703-cbdf8ef39aaa #s-Input_7 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11.0pt"
                      }
                    }
                  },{
                    "#s-4e0010c3-9d28-46a7-a703-cbdf8ef39aaa #s-Input_7 input": {
                      "attributes": {
                        "color": "#808080",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "11.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-4e0010c3-9d28-46a7-a703-cbdf8ef39aaa .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Button_2") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-4e0010c3-9d28-46a7-a703-cbdf8ef39aaa #s-Button_2": {
                      "attributes": {
                        "background-color": "#666666",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-4e0010c3-9d28-46a7-a703-cbdf8ef39aaa #s-Button_2": {
                      "attributes-ie": {
                        "-pie-background": "#666666",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-4e0010c3-9d28-46a7-a703-cbdf8ef39aaa .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Button_2")) {
      jEvent.undoCases(jFirer);
    }
  });jQuery("#simulation")
  .on("click", ".s-5d024353-5558-47f0-81d7-4ee7aa581184 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-login" ],
                    "value": {
                      "datatype": "datamaster",
                      "datamaster": "login"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-login" ],
                    "value": {
                      "action": "jimFilterData",
                      "parameter": {
                        "datatype": "datalist",
                        "datamaster": "login",
                        "element": "#s-login",
                        "value": {
                          "action": "jimAnd",
                          "parameter": [ {
                            "action": "jimContains",
                            "parameter": [ {
                              "field": "user"
                            },{
                              "datatype": "property",
                              "target": "#s-Input_3",
                              "property": "jimGetValue"
                            } ]
                          },{
                            "action": "jimContains",
                            "parameter": [ {
                              "field": "password"
                            },{
                              "datatype": "property",
                              "target": "#s-Input_4",
                              "property": "jimGetValue"
                            } ]
                          } ]
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/fd20adf0-5afd-4d50-af13-07534c210383",
                    "popup": {
                      "width": 300,
                      "height": 200,
                      "iscentered": false,
                      "top": 20,
                      "left": 20,
                      "hasscrollbars": "yes",
                      "isresizable": "yes"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is(".s-Image_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "login" ],
                    "value": {
                      "datatype": "datarow",
                      "datamaster": "login",
                      "element": "#s-login"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/c6af2bd8-0711-4b95-89f1-8a9c0036ded7",
                    "popup": {
                      "width": 300,
                      "height": 200,
                      "iscentered": false,
                      "top": 20,
                      "left": 20,
                      "hasscrollbars": "yes",
                      "isresizable": "yes"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is(".s-Image_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "login" ],
                    "value": {
                      "datatype": "datarow",
                      "datamaster": "login",
                      "element": "#s-login"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d69a4cbf-1844-45c3-9db6-887cad5a0d1b",
                    "popup": {
                      "width": 300,
                      "height": 200,
                      "iscentered": false,
                      "top": 20,
                      "left": 20,
                      "hasscrollbars": "yes",
                      "isresizable": "yes"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is(".s-Image_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimDeleteData",
                  "parameter": {
                    "datatype": "datarow",
                    "datamaster": "login",
                    "element": "#s-login"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNextPageData",
                  "parameter": {
                    "target": [ "#s-login" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimPrevPageData",
                  "parameter": {
                    "target": [ "#s-login" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimFirstPageData",
                  "parameter": {
                    "target": [ "#s-login" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimLastPageData",
                  "parameter": {
                    "target": [ "#s-login" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
    jFirer.parents("tr.datarow").trigger("click", true);
  });jQuery("#simulation")
  .on("click", ".s-fbb22a47-2718-49a3-a1e6-f712249f5120 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_23")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "datatype": "property",
                "target": "#s-Login",
                "property": "jimIsVisible"
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Login" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Login" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_24")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9d1b7a89-43da-48f3-9a62-02728d968463"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_25")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d1980101-0a74-45e0-8bfb-dcd9d9f5b8a6"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_26")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/4e0010c3-9d28-46a7-a703-cbdf8ef39aaa"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "action": "jimCount",
                  "parameter": [ {
                    "action": "jimFilterData",
                    "parameter": {
                      "datatype": "datamaster",
                      "datamaster": "login",
                      "value": {
                        "action": "jimAnd",
                        "parameter": [ {
                          "action": "jimEquals",
                          "parameter": [ {
                            "field": "user"
                          },{
                            "datatype": "property",
                            "target": "#s-Input_1",
                            "property": "jimGetValue"
                          } ]
                        },{
                          "action": "jimEquals",
                          "parameter": [ {
                            "field": "password"
                          },{
                            "datatype": "property",
                            "target": "#s-Input_2",
                            "property": "jimGetValue"
                          } ]
                        } ]
                      }
                    }
                  } ]
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/1c4f49c6-a53c-4d15-bb26-529d86cf97d5"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Message-dark" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Message-dark" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageunload", ".s-fbb22a47-2718-49a3-a1e6-f712249f5120 .pageunload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "name" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_1",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });jQuery("#simulation")
  .on("click", ".s-162570a7-0558-40f7-824c-e393b1433cb6 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimDeleteData",
                  "parameter": {
                    "datatype": "variable",
                    "element": "login"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/5d024353-5558-47f0-81d7-4ee7aa581184"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/5d024353-5558-47f0-81d7-4ee7aa581184"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });jQuery("#simulation")
  .on("click", ".m-e7ba14db-e912-4fe9-b55f-f0b9e60a7ae4 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#m-e7ba14db-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#m-e7ba14db-Input_3" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": [ "#m-e7ba14db-Input_3" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-e7ba14db-Flat-button")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#m-e7ba14db-Input_1",
                    "property": "jimGetValue"
                  },"admin" ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#m-e7ba14db-Input_3",
                    "property": "jimGetValue"
                  },"medicalcare" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "logged employee" ],
                    "value": "Admin"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimGreater",
                "parameter": [ {
                  "action": "jimCountData",
                  "parameter": {
                    "action": "jimFilterData",
                    "parameter": {
                      "datatype": "datamaster",
                      "datamaster": "employees",
                      "value": {
                        "action": "jimAnd",
                        "parameter": [ {
                          "action": "jimEquals",
                          "parameter": [ {
                            "field": "name"
                          },{
                            "datatype": "property",
                            "target": "#m-e7ba14db-Input_1",
                            "property": "jimGetValue"
                          } ]
                        },{
                          "action": "jimEquals",
                          "parameter": [ {
                            "field": "password"
                          },{
                            "datatype": "property",
                            "target": "#m-e7ba14db-Input_3",
                            "property": "jimGetValue"
                          } ]
                        } ]
                      }
                    }
                  }
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "logged employee" ],
                    "value": {
                      "datatype": "property",
                      "target": "#m-e7ba14db-Input_1",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#m-e7ba14db-Label_3" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-e7ba14db-Label_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "logged employee" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-e7ba14db-Button_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#m-e7ba14db-Group_1" ],
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("keyup.jim", ".m-e7ba14db-e912-4fe9-b55f-f0b9e60a7ae4 .keyup", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#m-e7ba14db-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.which === 9 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#m-e7ba14db-Input_3" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": [ "#m-e7ba14db-Input_3" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
      if(data.which === 9) {
        return false;
      }
    }
  })
  .on("pageload", ".m-e7ba14db-e912-4fe9-b55f-f0b9e60a7ae4 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#m-e7ba14db-Label_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNotEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "logged employee"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#m-e7ba14db-Panel_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#m-e7ba14db-Panel_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusin", ".m-e7ba14db-e912-4fe9-b55f-f0b9e60a7ae4 .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#m-e7ba14db-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNotEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#m-e7ba14db-Input_1",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#m-e7ba14db-Input_1" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#m-e7ba14db-Input_1" ],
                    "value": "Email"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusout", ".m-e7ba14db-e912-4fe9-b55f-f0b9e60a7ae4 .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#m-e7ba14db-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#m-e7ba14db-Input_1",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#m-e7ba14db-Input_1" ],
                    "value": "Email"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-e7ba14db-Input_3")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#m-e7ba14db-Input_3",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#m-e7ba14db-Input_3" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#m-e7ba14db-Input_3" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".m-e7ba14db-e912-4fe9-b55f-f0b9e60a7ae4 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#m-e7ba14db-Flat-button")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-e7ba14db-e912-4fe9-b55f-f0b9e60a7ae4 #m-e7ba14db-Flat-button": {
                      "attributes": {
                        "background-color": "#666666",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#m-e7ba14db-e912-4fe9-b55f-f0b9e60a7ae4 #m-e7ba14db-Flat-button": {
                      "attributes-ie": {
                        "-pie-background": "#666666",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "tooltip signin" ],
                    "value": "true"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 1000
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "tooltip signin"
                },"true" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#m-e7ba14db-Group_1" ],
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".m-e7ba14db-e912-4fe9-b55f-f0b9e60a7ae4 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#m-e7ba14db-Flat-button") && (jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#m-e7ba14db-Flat-button").length === 0 || jQuery(document.elementFromPoint(event.clientX, event.clientY)).closest("#m-e7ba14db-Flat-button") !== jFirer)) {
      event.stopPropagation();
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "tooltip signin" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-e7ba14db-e912-4fe9-b55f-f0b9e60a7ae4 #m-e7ba14db-Flat-button": {
                      "attributes": {
                        "background-color": "#43B6C7",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#m-e7ba14db-e912-4fe9-b55f-f0b9e60a7ae4 #m-e7ba14db-Flat-button": {
                      "attributes-ie": {
                        "-pie-background": "#43B6C7",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".m-e7ba14db-e912-4fe9-b55f-f0b9e60a7ae4 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#m-e7ba14db-Button_9") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-e7ba14db-e912-4fe9-b55f-f0b9e60a7ae4 #m-e7ba14db-Button_9": {
                      "attributes": {
                        "background-color": "#666666",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#m-e7ba14db-e912-4fe9-b55f-f0b9e60a7ae4 #m-e7ba14db-Button_9": {
                      "attributes-ie": {
                        "-pie-background": "#666666",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".m-e7ba14db-e912-4fe9-b55f-f0b9e60a7ae4 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#m-e7ba14db-Button_9")) {
      jEvent.undoCases(jFirer);
    }
  });