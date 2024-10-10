import styles from './postuser.module.css'

const getUsers = async(userId) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  if(!response.ok) throw new Error('something went wrong');
  return response.json();
}

const PostUser = async({userId}) => {
  const user = await getUsers(userId);
  
  return (
    <div className={styles.container}>
      <span className={styles.title}>
        Author
      </span>
      <span className={styles.username}>
        {user.name}
      </span>
    </div>
  )
}

export default PostUser
