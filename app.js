//
const express = require("express");
const bodyParser = require("body-parser");
// const request = require("request");
const https = require('https');
const { response } = require("express");

// var Mailchimp = require('mailchimp-api-v3')
const mailchimp = require('@mailchimp/mailchimp_marketing');


// var mailchimp = new Mailchimp("801274532f79528370b3c625503bd806-us14");

mailchimp.setConfig({
    apiKey: '9f12d37eafb207557a0f034e6b57d863-us14',
    server: 'us14',
});

// test call API
async function getInfo() {
    const res = await mailchimp.ping.get();
    console.log(res);

    // const response = await mailchimp.lists.getAllLists();
    // console.log(response);

    // const response = await mailchimp.lists.getList("68f00cfa76");
    // console.log(response);
    // const response = await mailchimp.lists.addListMember("68f00cfa76", {
    //     userName: 'hue2',
    //     email_address: "huea2@gmail.com",
    //     status: "subscribed",
    //     merge_fields: {
    //         FNAME: 'Pat2',
    //         LNAME: 'Xiao2',

    //     }
    // });
    // console.log(response);

    // const response = await mailchimp.lists.addListMember("68f00cfa76", {
    //     // userName: userNameSignUp,
    //     // email_address: emailSignUp,
    //     // status: "Subscribed",
    //     // merge_fields: {
    //     //     FNAME: firstName,
    //     //     LNAME: lastName,

    //     // }

    //     email_address: "ME@gmail.com",
    //     status: "Subscribed",

    // });
    // console.log(response);

}

getInfo();


const app = express()
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

// direct link to signup.html
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/signup.html")
})


// getting input value from register form
app.post("/", (req, res) => {
    const firstName = req.body.fNameInput;
    const lastName = req.body.lNameInput;
    const userNameSignUp = req.body.signUpUserNameInput;
    const emailSignUp = req.body.signUpEmailInput;
    const passwordSignUp = req.body.signUpPassWordInput;


    // Data get from input value (Register)
    const data = {
        // members: [
        //     {
        //         userName: userNameSignUp,
        //         email_address: emailSignUp,
        //         status: "Subscribed",
        //         merge_fields: {
        //             FNAME: firstName,
        //             LNAME: lastName,
        //         }
        //     }
        // ]

        userName: userNameSignUp,
        email_address: emailSignUp,
        status: "subscribed",
        // status: "pending",
        merge_fields: {
            FNAME: firstName,
            LNAME: lastName,
        }

    };

    // const jsonData = JSON.stringify(data);




    // Add member to list
    // const dc = 'us14'
    const listId = '68f00cfa76'

    const addMember = async () => {

        const response = await mailchimp.lists.addListMember(listId, data);
        console.log(response);
    };

    addMember();

})

app.listen(3000, () => {
    console.log('Server is running on port 300')
})

// API Key
// 9f12d37eafb207557a0f034e6b57d863-us14
// 

// listId
// 68f00cfa76