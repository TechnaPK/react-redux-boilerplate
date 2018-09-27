export const timestampToReadableTime = ( timestamp ) => {

    const dObject = new Date( timestamp );

    const date = `${dObject.getFullYear()}-${dObject.getMonth() + 1}-${dObject.getDate()}`;
    const time = `${dObject.getHours() + 1}:${dObject.getMinutes() + 1}:${dObject.getSeconds() + 1}`;
    
    return `${date} ${time}`;

}

export const readAbleDateTime = ( rawDate ) => {

    const dObject = new Date( rawDate );

    const date = `${dObject.getFullYear()}-${dObject.getMonth() + 1}-${dObject.getDate()}`;
    const time = `${dObject.getHours() + 1}:${dObject.getMinutes() + 1}:${dObject.getSeconds() + 1}`;
    
    return `${date} ${time}`;

}

export const readAbleDate = ( rawDate ) => {

    const dObject = new Date( rawDate );

    const date = `${dObject.getFullYear()}-${dObject.getMonth() + 1}-${dObject.getDate()}`;
    
    return date;
}

export const numberWithCommas = ( num ) => {
    return Number( num ).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const generateErrorMessage = (error) => {

    let errorMessage;

    // console.log(error)

    // for (var i in error){
    //     console.log( i )
    //     console.log( error[i] )
    // }

    if (!error.status) {
        
        errorMessage = "Network disconnected"

    }else if( error.response === undefined ){

        errorMessage = "Something went wrong. Please contact support team"

    }else{

        switch (error.response.statusText) {
    
            case "Unauthorized":
                errorMessage = "Wrong Credentials"
                break;
            default:
                errorMessage = "Something went wrong. Please contact support team"
                break;
    
        }
    }

    return errorMessage;

}