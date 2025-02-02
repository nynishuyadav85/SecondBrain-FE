export function Input({ onChange, placeholder }: { onChange: () => void; placeholder: string }) {
    return <div>
        <input placeholder={placeholder} type="text" onChange={onChange} className="px-4 py-2 border rounded m-2"></input>
    </div>
}