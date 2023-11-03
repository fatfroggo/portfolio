import { CategoryCard } from "../components/CategoryCards";

export default function Page() {
    return (
        <CategoryCard src='https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fposter-background&psig=AOvVaw1ThYdV0ndpgJDHaUlW_DNR&ust=1699025720781000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJjwkJbSpYIDFQAAAAAdAAAAABAF' primaryCTA="Shop" title="hi" subtitle="hello" subcategories={[{name: 'subcat1', href: '/'}, {name: 'subcat2', href: '/'}, {name: 'subcat3', href: "/"}]}/>
    )
}
