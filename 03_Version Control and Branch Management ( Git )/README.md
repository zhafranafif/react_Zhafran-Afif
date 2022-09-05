
## Ini merupakan summary yang dapat saya jabarkan setelah mendapatkan materi Version Control dan Branch Management ( Git )

#### Version Control System
1. Single User
  - SCCS - 1972 UNIX Only
  - RCS - 1982 Cross Platform, text only
2. Centralized
  - CVS - 1986 File Focus
  - Perforce - 1995
  - Subversion - 2000 - track directory structure
  - Microsoft Team Foundation Server - 2005
3. Distributed
  - Git - 2005
  - Mercurial - 2005
  - Bazaar - 2005

#### Git Ignore
.gitignore merupakan sebuah file yang berisi daftar nama-nama file dan direktori yang akan diabaikan oleh Git seperti node modules, .env, dan file atau direktori lain yang bersifat *confidential*. Perubahan apapun yang kita lakukan terhadap file dan direktori yang sudah masuk ke dalam daftar .gitignore tidak akan dicatat oleh Git.

#### 4 Tips for using Git as Workflow Collaboration
> 1. Let the **Master Branch** Undistributed
> 2. Avoid **Direct Edit** on Development
> 3. Apply the **Feature** to Development only
> 4. Apply Development to **Master** when it's done.
