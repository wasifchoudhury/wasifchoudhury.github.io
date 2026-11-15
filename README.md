# wasifchoudhury.github.io

Personal portfolio site. Plain HTML, CSS and a little JavaScript. No build step.

## 1. Files and names

| File | What it is |
|---|---|
| `index.html` | Home page: About, How I work, How I got here, Career Highlights, Education and Skills, closing buttons, plus all popups |
| `resume.html` | Resume page that shows the PDF |
| `style.css` | Colours (top of the file), fonts and layout |
| `script.js` | Popups and the mobile menu |
| `assets/images/profile.jpg` | Your photo. Square, about 600 x 600 px. A grey "WC" placeholder is there now |
| `documents/CV.pdf` | Your resume (your current one is already in place) |

Keep these exact names. The site looks for them.

## 2. Publish on GitHub (website only)

1. Sign in at github.com. Click **+** (top right), then **New repository**.
2. Name it exactly `wasifchoudhury.github.io`. Set it to **Public**. Click **Create repository**.
3. On the new repo page click **uploading an existing file**.
4. Unzip the ZIP on your computer. Drag in `index.html`, `resume.html`, `style.css`, `script.js`, `README.md` and the `assets` and `documents` folders. Click **Commit changes**.
5. Go to **Settings**, then **Pages**. Under **Build and deployment**, set Source to **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
6. Wait one to three minutes. Your site is at https://wasifchoudhury.github.io (refresh the Pages settings screen to see the link).

**Updating later:** open the repo, click **Add file**, then **Upload files**, and drag in the new file. A file with the same name replaces the old one. Do not delete `profile.jpg` or `CV.pdf`. If you do, the photo and resume break until you upload them again. Changes show after a minute or two (press Ctrl+F5 to refresh).

**Editing text:** open a file in the repo, click the pencil icon, edit, then **Commit changes**.

## 3. Common edits

**Replace the photo:** upload your square photo named `profile.jpg` into `assets/images/` (same name replaces the placeholder).

**Replace the resume:** upload your new PDF named `CV.pdf` into `documents/`. Note the resume page and Download buttons use this file, so it will show whatever is in the PDF.

**Add a job:** in `index.html`, find the `HOW I GOT HERE` comment.
1. Copy one whole `<article class="card"> ... </article>` block, paste it after the last card, and change the text.
2. Change `data-open="job-xxx"` to a new unique id, for example `job-newrole`.
3. Lower down, under the `POPUPS` comment, copy one `<dialog id="job-..."> ... </dialog>` block and give it the same id (`id="job-newrole"` and `id="job-newrole-t"`, `aria-labelledby="job-newrole-t"`).

**Add a project:** the same steps in the `CAREER HIGHLIGHTS` comment (the big number at the top of a card is the `<p class="fig">` line), using an id such as `proj-newproject`.

**Link a job to a project:**
- In the job popup, under "Related projects", add `<button class="textlink" data-open="proj-newproject">Project title</button>`.
- In the project popup, under "Related role", set `data-open` to the job id.

Only link items that belong together. The id after `data-open` must match a popup id exactly.

**Change skills:** find the `EDUCATION` comment. Each group is an `<h3>` followed by a `<ul class="chips">`. Add or remove `<li>` items.

**Change colours:** edit the values at the top of `style.css`.
