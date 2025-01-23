import React,{createContext,useState,useEffect} from 'react'
export const DataContext=createContext(null);
export const ServiceProvider = ({children}) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const getdata = async () => {
			const url = "https://fakestoreapi.com/products";
			const response = await fetch(url);
			const data1 = await response.json();
			setData(data1);
		};
		getdata();
	}, []);
  return (
    <>
      <DataContext.Provider value={data}>
        {children}
      </DataContext.Provider>
    </>
  )
}
