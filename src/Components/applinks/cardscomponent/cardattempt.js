<div className='card-wrapper'>
<img src= {props.cardGraphic} className='card-img'/>
<section className='text-wrapper'>
    <div className='left-column'>
        <h3 className='app-title'> {props.appTitle}</h3>
        { props.btnOneTxt === 'View ReadMe' ?  

              <button className='more-info-btn view-code'> <a href = {props.githubUrl}
              style = {{color: 'white', textDecoration:'none'}} target="_blank" rel="noopener noreferrer"
              >  View ReadMe  </a> </button>
            
        :
        <div className='btns-div'> 
               <button className='more-info-btn learn-more'> <a href = {props.url}
                style = {{color: 'white', textDecoration:'none'}} target="_blank" rel="noopener noreferrer">
               {props.btnOneTxt} </a> </button> 

                <button className='more-info-btn view-code'> <a href = {props.githubUrl}
                style = {{color: 'white', textDecoration:'none'}} target="_blank" rel="noopener noreferrer"
                >  View Code  </a> </button>

        </div>
        }
      
    </div>
    <div className='right-column'>
        <p className='app-description'> 
            {props.Description}
        </p>
        <p className='tech-description'> 
      Tech stack:
            {props.stackList}
        </p>
    </div>
  
</section>
</div>

