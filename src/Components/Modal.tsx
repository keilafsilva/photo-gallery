type Props = {
  image: string;
  closeModal: () => void;

}

const Modal = ({ image, closeModal }: Props) => {
  return (
    <>
      <div onClick={closeModal} className="fixed left-0 top-0 right-0 bottom-0 flex justify-center items-center bg-black/90">
        <img
          src={`${import.meta.env.BASE_URL}assets/${image}`}
          alt=""
          className="max-w-screen max-h-screen"
        />
      </div>
   
      <div onClick={closeModal} className="fixed top-5 right-8 w-10 h-10 cursor-pointer text-white text-5xl">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg>

      </div>
    </>
  );
};

export default Modal;
