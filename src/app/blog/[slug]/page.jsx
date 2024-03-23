import React from 'react'
import styles from './singlePost.module.css'
import Image from 'next/image'

const SinglePostPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="https://images.pexels.com/photos/19845624/pexels-photo-19845624/free-photo-of-an-aerial-view-of-a-pond-in-the-snow.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill className={styles.img} />
            </div>

            <div className={styles.textContainer}>
                <h1 className={styles.title}>Title</h1>
                <div className={styles.detail}>
                    <Image className={styles.avatar} src="https://images.pexels.com/photos/19845624/pexels-photo-19845624/free-photo-of-an-aerial-view-of-a-pond-in-the-snow.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={50} height={50} />
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Author</span>
                        <span className={styles.detailValue}>
                            Terry Jefferson
                        </span>
                    </div>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>
                            01.01.2024
                        </span>
                    </div>
                </div>
                <div className={styles.content}>lorem jkdkhfbhj ghbrjgd vrhg dn vhgbfv
                    /jkdkhfbhj</div>
            </div>
        </div>
    )
}

export default SinglePostPage