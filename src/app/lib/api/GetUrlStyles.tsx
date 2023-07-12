// import InputUrl from "./InputUrl";
// import { useQuery } from "react-query";
// import { useState } from "react";

// export default function GetUrlStyles({setStyleObject} : {setStyleObject: React.Dispatch<React.SetStateAction<{}>>}) {

    // const [url, setUrl] = useState('')

    // const getStyles = async () => {
    //     const response = await fetch('https://csswebscraperthreading-service-lvoso6lpvq-lz.a.run.app/get_computed_styles')
    //     return response.json()
    // }

    // const setStyles = (data: any) => {
    //     setStyleObject(data)
    // }

    // const {data, isLoading, isError} = useQuery('styles', getStyles)
    // setStyles(data)
    // if (isLoading) return <div>Loading...</div>
    // if (isError) return <div>Error</div>

    



//         return (
//         <div className="flex flex-col items-center justify-center">
//             <h1>Get Styles</h1>
//             <InputUrl 
//                 placeholder="https://www.example.com"
//                 value={url}
//                 onChange={(e) => setUrl(e.target.value)}
//                 setInputError={() => {}}
//             />
//             <button onClick={getData}>Get Styles</button>

//         </div>
//     )
// }
