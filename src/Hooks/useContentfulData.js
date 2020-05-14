
/*const SPACE_ID = 'kahoya7k4lnl';
const ACCESS_TOKEN = 'FO4-J31fgy-2zxLBr9mSNPZDU7Y1R0FEo_-AU4cpm3I';*/
import {useState, useEffect} from 'react';
import {createClient} from 'contentful';

const SPACE_ID = 'kahoya7k4lnl';
const ACCESS_TOKEN = 'FO4-J31fgy-2zxLBr9mSNPZDU7Y1R0FEo_-AU4cpm3I';

const client = createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
})
const useContentfulData = (contentType) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        client.getEntries({content_type: contentType})
        .then(entries => {
            setData(entries);
            setLoading(false);
        })
        
    },[contentType])
    return [data,loading]
}
const useOneContentfulData = (id) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    
    useEffect(()=>{
        client.getEntry(id.id)
        .then(entry => {
            setData(entry);
            setLoading(false);
        })
    },[id])
    return [data,loading]
}
export {useContentfulData, useOneContentfulData};