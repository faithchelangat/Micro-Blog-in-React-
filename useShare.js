import React, {useState, useEffect} from 'react'


function useShare(url){
    const [projects, setProjects]=useState(null);
    const[Loading, setIsLoading]=useState(true)
    const[isError, setIsError]=useState(null)

    useEffect(()=>{
        const abortcontroller =new AbortController()
        setTimeout(()=>{
            fetch(url, {signal: abortcontroller.signal})
            .then(res=>{
                if(!res.ok){
                    throw Error('Could not fetch the data for that resource');
                }
               return res.json();
            })
            .then(data =>{
               console.log(data)
               setProjects(data)
               setIsLoading(false)
               setIsError(null)
            })
            .catch(err=>{
                if(err.name === 'AbortError'){
                    console.log('Fetch aborted')
                }
                else{
                    setIsError(err.message)
                    setIsLoading(false)
                }
                
            })
        }, 1000)
      return ()=>abortcontroller.abort();
     }, [url])

     return {projects, Loading, isError}
}
export default useShare