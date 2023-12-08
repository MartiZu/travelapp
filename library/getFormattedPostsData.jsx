export default function getFormattedPostsData() {
    return new Intl.DateTimeFormat('en-GB', { dateStyle: 'full' }).format(new Date());
}