import React from 'react'
import "./Director.css";

function Director() {
return (
<div class="font container-fluid px-0" style={{overflowX: "hidden",backgroundColor: "gray"}}>
    <div
        style={{display: "flex",justifyContent: "center",alignItems: "center", width: "100%",backgroundColor: "black",height: "70px"}}>
        <h2 style={{color: "white"}}>Message from Director</h2>
    </div>
    <div class="row no-gutters small">
        <div class="col-md-1"></div>
        <div class="col-md-2 d-flex justify-content-center align-items-center" style={{textAlign:"center"}}>
            <img class="img-fluid aos-init aos-animate" src="img/director1.jpg" alt="nits mun logo"
                style={{width:"80%",borderRadius:"5%"}} data-aos="flip-down"/>
        </div>
        <div class="col-md-5" style={{textAlign:"center",overflowX:"hidden"}}>


            <p style={{textAlign:"justify",padding:"30px",fontSize:"1.1rem"}}>
                Kofi Annan has rightly said, “More than ever before in human history,
                we share a common destiny. We can master it only if we face it together.
                And that, my friends, is why we have the United Nations.”<br/>
                These words are proving to be more right everyday
                in this evolving 21st century. <br/><br/>

                Model United Nations (MUN) is an
                academic simulation of the United Nations
                which provides students or I should say
                “Future Leaders” of the world an environment to not only learn but
                also practice diplomacy and international relations. <br/><br/>

                It gives me immense pleasure to announce the Eighth edition
                of NIT Silchar Model United Nations is all set to take
                place in February at NIT Silchar campus in 2020.
                I would like to extend a warm welcome to all
                participants and hope to witness a great conference.
            </p>
        </div>
        <div class="col-md-1"></div>
    </div>
    <div class="row large no-gutters">
        <div class="col-md-1"></div>
        <div class="col-md-4 d-flex justify-content-center align-items-center"
            style={{textAlign:"center",minHeight:"100vh"}}>

            <img class="img-fluid" src="img/director1.jpg" alt="nits mun logo"  style={{borderRadius:"5%"}}/>
        </div>
        <div class="col-md-6" style={{textAlign:"center",paddingTop:"5vh",overflowX:"hidden"}}>

            <p style={{textAlign:"justify",padding:"30px",fontSize:"1.1rem"}}>
                Kofi Annan has rightly said, “More than ever before in human history,
                we share a common destiny. We can master it only if we face it together.
                And that, my friends, is why we have the United Nations.”
                These words are proving to be more right everyday
                in this evolving 21st century.<br/><br/>

                Model United Nations (MUN) is an
                academic simulation of the United Nations
                which provides students or I should say
                “Future Leaders” of the world an environment to not only learn but
                also practice diplomacy and international relations. <br/><br/>

                It gives me immense pleasure to announce the Eighth edition
                of NIT Silchar Model United Nations is all set to take
                place in February at NIT Silchar campus in 2020.
                I would like to extend a warm welcome to all
                participants and hope to witness a great conference.


                <br/><br/>
                Prof. SIVAJI BANDYOPADHYAY
                <br/>
                Director, NIT Silchar<br/>

            </p>

        </div>
        <div class="col-md-1"></div>
    </div>
</div>
)
}

export default Director