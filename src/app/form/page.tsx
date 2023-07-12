'use client'
import { useState, useEffect } from 'react'
import CreateForm from '../components/pagination/CreateForm'
import FormPreview from '../components/pagination/FormPreview'
import { createForm } from '../lib/api/CreateForm';
import { redirect } from 'next/navigation'
import MainButton from '../components/MainButton';
import { Main } from 'next/document';



export default function FormPaginator() {
  const [formRecipe, setFormRecipe] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [payload, setPayload] = useState({} as object);
  const [signedIn, setSignedIn] = useState(true);

  useEffect(() => {
    console.log(payload)
  }, [payload])


  if(!signedIn){
    redirect('/auth/signin')
  }


  return (
    <div className="flex flex-col  min-h-screen w-full m-auto px-20 ">
      {currentPage === 0 && <CreateForm formRecipe={formRecipe} setFormRecipe={setFormRecipe} />}
      {currentPage === 1 && <FormPreview formRecipe={formRecipe} setPayload={setPayload} />}
      <div className="flex w-full justify-between items-center mb-8">
        <MainButton
          style={{ visibility: currentPage !== 0 ? 'visible' : 'hidden' }}
          text="Back"
          onClick={() => setCurrentPage(currentPage - 1)} />

        {currentPage === 1 ? (
        
          <MainButton
            style={{}}
            text="Create Form"
            onClick={() => { createForm(payload) }} />
        ) : (
         <MainButton 
          style={{ visibility: formRecipe.length !== 0 ? 'visible' : 'hidden' }}
          text="Next" 
          onClick={() => setCurrentPage(currentPage + 1)} />
        )}
      </div>
    </div>
  )
}
