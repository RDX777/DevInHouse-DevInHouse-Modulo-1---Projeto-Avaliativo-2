import "./Toggle.styled.css"

export const Toggle = () => {
  return (
    <>
      <div>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
      </div>
    </>
  )
}
