import Pusher from "pusher"
import ClientPusher from "pusher-js"


export const serverPusher = new Pusher({
    appId: "1533203",
    key : "c2a9857c36bfa71dd2af",
    secret : "4d98f57e81508b8182b6",
    cluster :"mt1",
    useTLS: true,
})

export const clientPusher = new ClientPusher('c2a9857c36bfa71dd2af', {
    cluster: 'mt1',
    forceTLS: true
  });