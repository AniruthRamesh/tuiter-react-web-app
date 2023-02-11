const Navigation = () =>{
    return(`
    <div
      class="d-flex justify-content-between mt-4 mb-3"
      style="margin-right: 4rem; margin-left: 2rem"
    >
      <a class="nav-link fw-bold" href="../explore/navigation/for-you.html"
        >For you</a
      >
      <a
        class="nav-link fw-bold text-secondary"
        href="../explore/navigation/trending.html"
        >Trending</a
      >
      <a
        class="nav-link fw-bold text-secondary"
        href="../explore/navigation/news.html"
        >News</a
      >
      <a
        class="nav-link fw-bold text-secondary"
        href="../explore/navigation/sports.html"
        >Sports</a
      >
      <a
        class="nav-link fw-bold text-secondary d-none d-md-block"
        href="../explore/navigation/entertainment.html"
        >Entertainment</a
      >
    </div>
    
    `)
}

export default Navigation