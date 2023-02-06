import "./header.style.css"

const Header = ({title, links}) => {
  return (
    <div className="header">
      <h1 className="title">{title}</h1>
      <ul>
        {
          links.map((value) => {
           return(
            <a key={value.linkName} href={value.linkHref} className="link">
              {value.linkName}
            </a>
           )
          })
        }
      </ul>
    </div>
  );
}

export default Header
