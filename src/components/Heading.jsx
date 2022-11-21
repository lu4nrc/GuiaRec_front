const Heading = (props) => {
  return (
    <div>
        <span className='text-base md:text-lg font-semibold uppercase text-primary mb-3'>{props.sub}</span>
        <h2 className='text-3xl md:text-5xl -tracking-wide font-extrabold mb-3'>{props.children}</h2>
    </div>
  )
}

export default Heading