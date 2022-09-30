import SocialButton from "./Molecules/SocialButton";

const Contact = () => {
  return (
    <div>
      <h2 className="text-white text-2xl mb-10" > Entrar em contato </h2>
      <div className="flex flex-wrap justify-center">
        <SocialButton name="LinkedIn" url="#" />
        <SocialButton name="GitHub" url="#" />
        <SocialButton name="WhatsApp" url="#" />
        <SocialButton name="Site" url="#" />
      </div>
    </div>
  )
}
export default Contact;