import {  useSelector } from "react-redux/es/hooks/useSelector";

const DataUsingComponent = () => {

const fetchData = useSelector((state) => {
    if (state.myData.length < 0){
        return;
    } else if (state.myData.length > 0){
        const fetchedName = state.myData.map(item => {
            return (
                <div key={item.Age}>
                    <p>The Person Name is {item.Name}</p>
                </div>
            )
        });
        return fetchedName;
    }
})

return (
    <>
        <h2>This  is data using component</h2>
        {fetchData}
    </>
)
}

export default DataUsingComponent;