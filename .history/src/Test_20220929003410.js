import React from 'react'

const Test = (props) => {
  return (
    <div><table>
    <tr>
      <th>ID</th>
      <th>Name</th>
    </tr>
    {props.response.map((el) => {
      return (
        <tr>
          <td>{el.id}</td>
          <td>{el.scheme_name}</td>
        </tr>
      );
    })}
  </table></div>
  )
}

export default Test