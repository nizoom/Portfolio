<Tippy
  content = {<div><Tooltip/>

  </div> }
  visible = {tipStatus}
  onClick = {show}
  animation = "perspective"
  placement = "bottom-start">

  <li onClick = {tipStatus ? hide : show}
  className = "link"> Contact</li>
</Tippy>
