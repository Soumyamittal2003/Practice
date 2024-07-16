const ShortUniqueId = require('short-unique-id');
const URL=require('../model/url');


async function handleGenerateNewShortUrl(req,res){
    const body =req.body;
    if(!body.url){
        return res.status(400).json({error :'url is required'})
    }
    const uid = new ShortUniqueId({ length: 10 });
    const shortid = uid.rnd()
    await URL.create({
        shortId : shortid ,
        redirecturl : body.url,
        visitHistory:[],
    });

    return res.json({id:shortid});
}

// this function takes id from url match it from db , update the visitHistory & redirect to original url.
async function handleRedirect(req,res){
    const shortId =req.params.shortId // fecthing the shortid from the user given at link.
    const entry=await URL.findOneAndUpdate({
        shortId
    },{ $push:{
        visitHistory:{
            timestamp:Date.now()
        },
            },
        })
    return res.redirect(entry.redirecturl);
}

async function handleGetAnalytics(req,res){
    const shortId =req.params.shortId;
    const result =await URL.findOne({shortId});

    return res.json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory
    })


}
        


module.exports={
    handleGenerateNewShortUrl,
    handleRedirect,
    handleGetAnalytics
}