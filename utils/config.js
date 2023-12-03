const development = {
    APP_SERVER:"http://devapi.gofrint.live",
    WS_APP_SERVER:"ws://devws.gofrint.live",
    STOREFRONT_TOKEN:"cc1bbf796c5078415d987e79c3874859"
}
const production= {
    APP_SERVER:"http://api.gofrint.live",
    WS_APP_SERVER:"ws://ws.gofrint.live",
    STOREFRONT_TOKEN:"cc1bbf796c5078415d987e79c3874859"

}
const local ={
    APP_SERVER:"http://localhost:3001",
    WS_APP_SERVER:"ws://localhost:8080",
    // STOREFRONT_TOKEN:"cc1bbf796c5078415d987e79c3874859",
    STOREFRONT_TOKEN:"b7fea9fb17c3a114ea874d81a8058213",
    SERVER_API_URL:"",
    ORIGIN_URL:"http://localhost:3000",
    MAILCHIMP_URL:"https://us21.list-manage.com/contact-form?u=97435be913bded329828932b1&form_id=e38dc019dc9ed7f5d222ebe4d8da5884"
}
module.exports = {
    development , local , production
}