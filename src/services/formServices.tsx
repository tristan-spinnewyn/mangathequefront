export const formHandleChange = (event: any,varData: any,fonctionMajData: any)=>{
    const value = event.currentTarget.value
    const name = event.currentTarget.name

    fonctionMajData({ ...varData, [name]: value })
}