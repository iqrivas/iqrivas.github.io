import Card from 'components/Card';

const Contact = ({ activeTab, emailVisible, onEmailClick }) => {
  return (
    <div id="contacto_panel" className={activeTab === 'contacto' ? 'p-2.5 shadow-md rounded w-full' : 'hidden'}>
      <Card href="https://www.linkedin.com/in/iqrivas/" linkText="LinkedIn" />
      <Card>
        {emailVisible ? (
          <a className="underline text-black" href="mailto:iqrivas@gmail.com">iqrivas@gmail.com</a>
        ) : (
          <button type="button" className="bg-none border-none p-0 font-inherit cursor-pointer underline text-black" onClick={onEmailClick}>
            Email
          </button>
        )}
      </Card>
    </div>
  );
};

export default Contact;
