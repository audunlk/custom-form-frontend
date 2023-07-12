
// // //example
// // // {
// // //     "tables": [
// // //       {
// // //         "tableName": "users",
// // //         "columns": [
// // //           {
// // //             "columnName": "id",
// // //             "dataType": "serial",
// // //             "isPrimaryKey": true
// // //           },
// // //           {
// // //             "columnName": "email",
// // //             "dataType": "varchar(25)",
// // //             "isUnique": true,
// // //             "isNullable":  false
// // //           },
// // //           {
// // //             "columnName": "first_name",
// // //             "dataType": "varchar(25)"
// // //           },
// // //           {
// // //             "columnName": "last_name",
// // //             "dataType": "varchar(25)"
// // //           },
// // //           {
// // //             "columnName": "username",
// // //             "dataType": "varchar(25)"
// // //           },
// // //           {
// // //             "columnName": "address_id",
// // //             "dataType": "int",
// // //             "isForeignKey": true,
// // //             "referencedTable": "addresses",
// // //             "referencedColumn": "id"
// // //           },
// // //           {
// // //             "columnName": "phone",
// // //             "dataType": "varchar(25)"
// // //           }
// // //         ]
// // //       },
// // //       {
// // //         "tableName": "addresses",
// // //         "columns": [
// // //           {
// // //             "columnName": "id",
// // //             "dataType": "SERIAL",
// // //             "isPrimaryKey": true
// // //           },
// // //           {
// // //             "columnName": "street",
// // //             "dataType": "varchar(25)"
// // //           },
// // //           {
// // //             "columnName": "city",
// // //             "dataType": "varchar(25)"
// // //           },
// // //           {
// // //             "columnName": "state",
// // //             "dataType": "varchar(25)"
// // //           },
// // //           {
// // //             "columnName": "postal_code",
// // //             "dataType": "varchar(25)"
// // //           }
// // //         ]
// // //       }
// // //     ]
// // //   }


// // //if addrress table, add this to the USER TABLE after the usertable has been added
// // //{
// //     //             "columnName": "address_id",
// //     //             "dataType": "int",
// //     //             "isForeignKey": true,
// //     //             "referencedTable": "addresses",
// //     //             "referencedColumn": "id"
// //     //           },



// // //TODO:
// // //make formRecipe into an object with the following properties:
// // //input, type, required



// export const generateJson = (creationObject: Object) => {
//     const payload = {
//         "tables": [
//             {
//                 "tableName": "users",
//                 "columns": [
//                     {
//                         ...Object.entries(creationObject).map((key, value) => {
//                             return {
//                                 "columnName": key,
//                                 "dataType": value.dataType,
//                                 "isNullable": value.isNullable,
//                             }
//                         }
//                         )
//                     }
//                 ]
//             }
//         ]
                
//     }
// }




