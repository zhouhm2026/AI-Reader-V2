const a="/api/usage/track";function n(t,e){fetch(a,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event_type:t,metadata:{}})}).catch(()=>{})}export{n as t};
