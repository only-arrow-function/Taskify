const BackDrop = ({onCloseModal}: {onCloseModal?: () => void}) => {
  return <div className='fixed inset-0 bg-black/70' onClick={onCloseModal}/>
}

export default BackDrop;