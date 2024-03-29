import { useRouter } from "node_modules/next/router";
import { useEffect , useState } from "react";
import useSWR from "swr";


const fetcher = (url:string) => fetch(url).then( (rep) => rep.json());

export default function useUser() {
    const {data , error } = useSWR("/api/users/me"  );
    const router = useRouter();
    useEffect(()=> {
        if(data && !data.ok) {
            router.replace("/enter");
        }
    }, [data, router]);
    
    return {user: data?.profile, isLoading: !data && !error};
}


