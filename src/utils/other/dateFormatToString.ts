


export default function dateFormatToString(date : Date){

    return `${date?.getDate() >= 10 ? date?.getDate() : "0"+date?.getDate()}/
                 ${date?.getMonth() + 1 >= 10 ? (date?.getMonth() +1): "0"+(date?.getMonth() +1)}/
                 ${date?.getFullYear()}`
}