import{s as o,b as p,j as t,r as i,L as C,C as j,d as k,N as y}from"./index-38da2961.js";import{P as L,g as w,C as v,a as P}from"./ComicItem-5cc8bdef.js";const M=o.button`
  background: transparent;
  border-radius: 8px;
  border: none;

  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #ddcfcf;
  font-size: 16px;

  text-transform: uppercase;

  transition: 0.5s;

  &:hover {
    background: #600404;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #600404, 0 0 25px #600404, 0 0 50px #600404,
      0 0 100px #600404;
    /* box-shadow: rgba(255, 107, 1, 0) 0px 2px 8px,
      rgba(255, 255, 255, 0.3) 0px 1px inset,
      rgba(255, 255, 255, 0.2) 0px 10px inset,
      rgba(255, 255, 255, 0.25) 0px 10px 20px inset,
      rgba(130, 11, 5, 0.3) 0px -15px 30px inset; */
  }
`,S=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,A=p`
  0% {
    left: -100%;
  }
  50%, 100% {
    left: 100%;
  }
`,B=o.span`
  position: absolute;
  display: block;
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #600404);
  animation: ${A} 1s linear infinite;
`,$=p`
  0% {
    top: -100%;
  }
  50%, 100% {
    top: 100%;
  }
`,z=o.span`
  position: absolute;
  display: block;
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #600404);
  animation: ${$} 1s linear infinite;
  animation-delay: 0.25s;
`,F=p`
  0% {
    right: -100%;
  }
  50%, 100% {
    right: 100%;
  }
`,H=o.span`
  position: absolute;
  display: block;
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #600404);
  animation: ${F} 1s linear infinite;
  animation-delay: 0.5s;
`,I=p`
  0% {
    bottom: -100%;
  }
  50%, 100% {
    bottom: 100%;
  }
`,O=o.span`
  position: absolute;
  display: block;
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #600404);
  animation: ${I} 1s linear infinite;
  animation-delay: 0.75s;
`,m=({onClick:n})=>t.jsx(S,{children:t.jsxs(M,{onClick:n,children:["Load More",t.jsx(B,{}),t.jsx(z,{}),t.jsx(H,{}),t.jsx(O,{})]})});m.propTypes={onClick:L.func.isRequired};const T=()=>{const[n,l]=i.useState([]),[s,x]=i.useState(1),[b,a]=i.useState(!1),[g,u]=i.useState([]),r=12,h=()=>{a(!0);const e=s*r,c=e-r,d=g.slice(c,e);l([...n,...d]),x(s+1),a(!1)};return i.useEffect(()=>{a(!0),w().then(e=>{u(e);const c=s*r,d=c-r,f=e.slice(d,c);l(f),x(s+1)}).catch(console.log).finally(()=>{a(!1)})},[]),t.jsxs(t.Fragment,{children:[b&&t.jsx(C,{}),t.jsx(j,{children:t.jsx(k,{children:n.map(e=>t.jsx(v,{comic:e},e.id))})}),g.length>n.length&&t.jsx(m,{onClick:h,children:"Load More"})]})},W="/comix_zone/assets/spider-hero-5e94f586.png",E=o.div`
  width: 1440px;
  height: 780px;

  background-image: url(${W});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  display: flex;
  justify-content: space-between;
  align-items: end;

  padding: 278px 32px 40px 32px;
`,N=o.div`
  padding-bottom: 312px;
`,R=o(y)`
  height: 43px;
  padding: 12px 24px;

  border-radius: var(--btn-border-radius);
  background-color: var(--red);
  color: var(--text-primary);

  font-size: 14px;
  line-height: 18px;
  text-transform: uppercase;

  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: var(--box-shadow-glass);
  }
`,q=()=>t.jsxs(E,{children:[t.jsx(N,{children:t.jsx(P,{titleCaption:"Web-based platform",title:"Comics",description:`Comics is a medium used to express ideas with images, often combined
          with text or other visual information.`,buttonLink:"/",buttonText:"Все комиксы"})}),t.jsx(R,{to:"/",children:"Back Home"})]}),J=()=>t.jsxs(t.Fragment,{children:[t.jsx(q,{}),t.jsx(T,{})]});export{J as default};
