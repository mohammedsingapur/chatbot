function send(){
    var get = document.getElementById("get").value
    let msgBox = document.getElementById("msg")
    let sender = document.getElementById("userMsg")
    // let reply = document.getElementById("botRespond")
    let sg =  get.toLowerCase()
    if(sg.includes('hii') || sg.includes('hello') || sg.includes('hi')){
        getMsg(sender,get)
        respond(sender,'Hello Dear, How can i help  u?')
    }

    else if(sg.includes('who are you') || sg.includes('your name') || sg.includes('who r u')){
        getMsg(sender,get)
        respond(sender,'My name is Panda 💓, How can i help you?')
    }

    else if(sg.includes('medical') || sg.includes('health')){
        getMsg(sender,get)
        let med = window.prompt('What health issues you are facing')
        if(med !== ''){
            respondLink(sender,
            'https://www.healthline.com/search?q1='+med,'Click here to get Suggestion about '+med,
            'Kindly visit this link, This will advice for each and every kind of health issues')
        }
        else{
            respond(sender,'No Issues Entered')
        }
    }

    else if(sg.includes('song') || sg.includes('music')){
        getMsg(sender,get)
        let song = window.prompt('Which  Song or music you are looking for')
        if(song !== ''){
            respondLink(sender,
                    'https://gaana.com/search/'+song,'Check out for the link for '+song,
                    'We found this, For your search of '+song+', Happy to help you')
        }
        else{
            respond(sender,'No Song or Music name Entered')
        }
    }

    else if(sg.includes('call') || sg.includes('place a call')){
        getMsg(sender,get)
        let num = window.prompt('Enter Phone number with country code [Optional]')
        if(num !== ''){
            window.open('tel:'+num)
            respond(sender,'Caling '+num)
        }
        else{
            respond(sender,'No Number Entered')
        }
    }

    else if(sg.includes('sms') || sg.includes('message') || sg.includes('text')){
        getMsg(sender,get)
        let num = window.prompt('Enter Phone number with country code [Optional]')
        if(num !== ''){
            let msg = window.prompt('Enter the Message')
            window.open('sms:'+num+'?body='+msg)
            respond(sender,'Texting : '+msg+', to : '+num)
        }
        else{
            respond(sender,'No Number Entered')
        }
    }

    else if(sg.includes('movie')){
        getMsg(sender,get)
        let movie = window.prompt('Which Movie or Web Series you are looking for')
        if(movie !== ''){
            respondLink(sender,'https://themoviesflix.io/?s='+movie,
                        'Click here to get Download link for movie '+movie,
                        'We have found this for '+movie+', This website has lot of movies and web series, You can check it out. Happy to  help')
                        
            respondLink(sender,'https://hdmoviesflix.io/?s='+movie,
                        'Click here to get Download link for movie '+movie,
                        'This is a mirror link for '+movie+', If above link  not  worked, This website also has lot of movies and web series, You can check it out. Happy to  help')            
        }
        else{
            respond(sender,'No Name Entered')
        }
    }

    else if(sg.includes('book') || sg.includes('study material')){
        getMsg(sender,get)
        let book = window.prompt('Which Book or Study Material you want?')
        if(book !== ''){
            respondLink(sender,'https://www.pdfdrive.com/'+book+'-books.html',
                        'Click here to check out the results for '+book,
                        'This is the link for Book or Study Material '+book+' you searched for')
        }
        else{
            respond(sender,'No Data Entered')
        }
    }

    else if(sg.includes('send mail') || sg.includes('send email') || sg.includes('mail')){
        getMsg(sender,get)
        let mail = window.prompt('Enter the sender E-Mail Id')
        if(mail !== ''){
            window.open('mailto:'+mail)
            respond(sender,'Redirecting '+mail)
        }
        else{
            respond(sender,'No E-Mail Id Entered')
        }
    }

    document.getElementById("get").value = ''
    msgBox.scrollTop = msgBox.scrollHeight;
}
const getMsg = (parent,get) => {
    let showSentMsg = document.createElement("H3")
    let msg = document.createTextNode(get)
    showSentMsg.appendChild(msg)
    showSentMsg.style.textAlign="left"
    showSentMsg.style.color="darkred"
    showSentMsg.style.marginRight = "10%"
    parent.appendChild(showSentMsg)
    
}
const respond = (parent,post) => {
    let showSentMsg = document.createElement("H3")
    let msg = document.createTextNode(post)
    showSentMsg.appendChild(msg)
    showSentMsg.style.textAlign="right"
    showSentMsg.style.color="chocolate"
    showSentMsg.style.marginLeft = "10%"
    parent.appendChild(showSentMsg)
    
}
const respondLink = (parent,link,linkName,post) => {
    let showSentMsg = document.createElement("H3")
    let a = document.createElement("a")
    let br = document.createElement("BR")
    let blank = document.createAttribute("target")
    blank.value = '_blank'
    let href = document.createAttribute("href")
    href.value = link
    a.setAttributeNode(blank)
    a.setAttributeNode(href)
    a.appendChild(document.createTextNode(linkName))
    // a.style.margin = "auto"
    // a.style.marginLeft="25%"
    a.style.marginRight = "3px"
    a.style.color="dodgerBlue"
    let msg = document.createTextNode(post)
    showSentMsg.appendChild(msg)
    showSentMsg.appendChild(br)
    showSentMsg.appendChild(a)
    showSentMsg.style.textAlign="right"
    showSentMsg.style.color="chocolate"
    showSentMsg.style.marginLeft = "10%"
    parent.appendChild(showSentMsg)
    // parent.appendChild(a)
    
}
