export const handleAddToRecipe = (
    input: string,
    formRecipe: string[],
    setFormRecipe: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    // Select firstname and last name if address is selected
    if (input === 'Address') {
        if(formRecipe.includes('Address')) {
            setFormRecipe((prevRecipe: string[]) =>
            prevRecipe.filter((item) => item !== 'Address')
            );
        }
      if (!formRecipe.includes('Address')) {
        setFormRecipe((prevRecipe: string[]) => [...prevRecipe, 'Address']);
      }
      if (!formRecipe.includes('First Name')) {
        setFormRecipe((prevRecipe: string[]) => [...prevRecipe, 'First Name']);
      }
      if (!formRecipe.includes('Last Name')) {
        setFormRecipe((prevRecipe: string[]) => [...prevRecipe, 'Last Name']);
      }
      return;
    }
    // Don't allow removal of first and last name if address is selected
    if (input === 'First Name' || input === 'Last Name') {
      if (formRecipe.includes('Address')) {
        return;
      }
      setFormRecipe((prevRecipe: string[]) =>
        prevRecipe.filter((item) => item !== input)
      );
    }
    // Normal addition
    formRecipe.includes(input)
      ? setFormRecipe((prevRecipe: string[]) =>
          prevRecipe.filter((item) => item !== input)
        )
      : setFormRecipe((prevRecipe: string[]) => [...prevRecipe, input]);
  
    console.log(formRecipe);
  };