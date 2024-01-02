import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      去发现和分享 AI 的世界
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> 一切由AI提供支持 </span>
    </h1>
    <p className='desc text-center'>
      你不知道的AI 是一款为新时代开发的并且开源的AI建议工具，你可以在这里创造并和分享有创意的AI建议内容
    </p>

    <Feed />
  </section>
);

export default Home;
