interface InputConfig {
    desc: string;
    dataType: string;
    isUnique: boolean;
}

export const handleCreationObject = (title: string, inputConfigs: InputConfig[], requiredInputs: string[], columns: string[]) => {
    const creationObject = {
        tables: [
            {
                tableName: "form",
                columns: [
                    {
                        columnName: "id",
                        dataType: "serial",
                        isPrimaryKey: true,
                    },

                    ...columns.map((inputName) => {
                        const input = inputConfigs.find((input) => input.desc === inputName);
                        if (!input) return;
                        return {
                            columnName: inputName.replace(" ", "_").toLowerCase(),
                            dataType: input.dataType,
                            isNullable: !requiredInputs.includes(inputName),
                            isUnique: input.isUnique,
                        };
                    })
                ],
            },
        ],
    };
    console.log(creationObject)
    return creationObject
}