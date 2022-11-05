import type { ArticlesQuery  } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'


export const QUERY = gql`
  query ArticlesQuery {
    posts {
      id
      title
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ posts }: CellSuccessProps<ArticlesQuery>) => {
  return (
    <ul>
      {posts.map(({title}) => {
        return <li key={title}>{JSON.stringify(title)}</li>
      })}
    </ul>
  )
}