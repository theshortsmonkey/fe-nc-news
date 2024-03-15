import { Articles } from './Articles/Articles';
import { ErrorComponent } from './ErrorComponent';
import { Home } from './Home/Home';
import { SingleArticle } from './Articles/SingleArticle';
import { Topics } from './Topics/Topics';
import { User } from './User/User';
import { Routes, Route } from "react-router-dom";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/articles/:article_id" element={<SingleArticle />} />
      <Route path="/topics" element={<Topics />} />
      <Route path="/topics/:topic_slug" element={<Topics />} />
      <Route path="/user" element={<User />} />
      <Route path="*" element={<ErrorComponent route="not found" />} />
    </Routes>
  )
}
