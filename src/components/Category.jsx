import "./Category.css"

function Category({lable,picture}){
    
    
    return(
        <div className="">
            <img src={picture} alt="" />
            <h2>{lable}</h2>
        </div>

        
    )
}
export {Category}