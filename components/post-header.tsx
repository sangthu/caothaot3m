import Avatar from './avatar'
import Date from './date'
import CoverImage from './cover-image'
import PostTitle from './post-title'
import Categories from './categories'

export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  categories,
}) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg font-bold flex flex-row items-center gap-3">
          <span>
            {author.node.name || null}
          </span>
          Posted <Date dateString={date} />
        </div>
      </div>
      <div className="post-body_content__1R6cU max-w-2xl mx-auto">
        <CoverImage title={title} coverImage={coverImage} />
      </div>
    </>
  )
}
