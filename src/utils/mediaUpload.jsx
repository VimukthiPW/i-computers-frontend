import { createClient } from "@supabase/supabase-js"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ucm1vd2lyZHl2YXh4bndzbGdoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ1MTUyODIsImV4cCI6MjA5MDA5MTI4Mn0.PfHbZt3PRyxYqeA_zIsl5gQpkwfk4QmHU7cCClnyp0Q"
const supabaseUrl = "https://onrmowirdyvaxxnwslgh.supabase.co"

const supabase = createClient(supabaseUrl , supabaseKey)

//image
export default function uploadFile(file){
    return new Promise(
        (resolve , reject)=>{

            if(file == null){
                reject("No file provided")
                return
            }

            const timestamp =new Date().getTime()
            const fileName =timestamp + "-"+file.name

            supabase.storage.from("images").upload(fileName , file , {
                upsert : false,
                cacheControl : 3600
            }).then(
                ()=>{
                    const url = supabase.storage.from("images").getPublicUrl(fileName).data.publicUrl
                    resolve(url)
                }
            ).catch(
                ()=>{
                    reject("Failed to upload  file")
                }
            )
        }
    )
}