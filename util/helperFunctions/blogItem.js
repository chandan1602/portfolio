export const getTimeStamp = (org) => {
    const curr = new Date()
    if(curr.getUTCFullYear()!==Number(org.slice(0,4))) {
        let diff = curr.getFullYear() - Number(org.slice(0,4))
        if(diff===1) return '1 year ago'
        return `${diff} years ago`
    }
    else if((curr.getUTCMonth()+1)!==Number(org.slice(5,7))) {
        console.log("MONTH : ", curr.getMonth())
        let diff = curr.getMonth() + 1 - Number(org.slice(5,7)) 
        if(diff===1) return '1 month ago'
        return `${diff} months ago`
    }
    else if(curr.getUTCDate()!==Number(org.slice(8,10))) {
        let diff = curr.getDate() - Number(org.slice(8,10))
        if(diff===1) return '1 day ago'
        return `${diff} days ago`
    }
    else if(curr.getUTCHours()!==Number(org.slice(11,13))) {
        let diff = curr.getHours() - Number(org.slice(11,13))
        if(diff === 1) return '1 hour ago'
        return `${diff} hours ago`
    }
    return 'few minutes ago'
}