import { getMembers } from '@/actions/loggedActions'
import Header from '../components/Header'
import Link from 'next/link'

export default async function Members() {
  const members = await getMembers()


  if (!members) return

  const hasInactive = members.filter((member => member.status === 'inactive'))

  console.log(hasInactive);




  return (
    <>
      <Header>Members</Header>

      <div className='h-[90%]  p-16   text-[#5d5d6d]'>

        <h1 className='text-xl font-bold pb-5'>Team members</h1>



        <div className='w-full '>
          <div >
            <div className='grid grid-cols-8  bg-[#eef1ef]  p-4 rounded-tr rounded-tl mb-[2px] '>
              <div className='col-span-6'><strong>E-mail</strong></div>
              <div><strong>Role</strong></div>
              <div><strong>Action</strong></div>
            </div>
          </div>

          <div >

            {
              members.map(member => {

                if (member.status === 'inactive') return

                return (
                  <div key={member.id}>
                    <Link className='grid grid-cols-8 bg-white p-4 mb-[2px]' href={`/products/djhsakhdjh/edit-product`}>
                      <div className='col-span-6 flex items-center font-semibold text-xl'>
                        <span>{member.email}</span>
                      </div>

                      <div className='flex items-center font-semibold'>
                        <span>{member.permission === 0 ? 'Owner' : 'User'}</span>
                      </div>

                      <div className='flex gap-2 items-center'>
                        {member.permission === 1 &&
                          <>
                            <button>Delete</button>
                            <span>/</span>
                          </>
                        }

                        <button>Edit</button>
                      </div>
                    </Link>
                  </div>
                )
              })
            }


          </div>

        </div>

        <div>
          <div className='flex mt-14 mb-5' >
            <h1 className='text-xl font-bold '>Pending invites</h1>

            <Link className='px-5 ml-auto mr-0 block w-fit py-2 bg-[#ffa585] rounded font-bold' href={''}>Invite member</Link>

          </div>

          <div className='w-full '>
            <div >
              <div className='grid grid-cols-8  bg-[#eef1ef]  p-4 rounded-tr rounded-tl mb-[2px] '>
                <div className='col-span-6'><strong>E-mail</strong></div>
                <div><strong>Role</strong></div>
                <div><strong>Action</strong></div>
              </div>
            </div>

            <div >

              {!hasInactive && (<div className=' bg-gray-200'>
                <div className=' p-4 rounded-bl rounded-br italic' >
                  <span>There are no pending invitation.</span>
                </div>
              </div>)}

              {hasInactive.map(member => (
                <div key={member.id}>
                  <Link className='grid grid-cols-8 bg-gray-200 italic p-4 mb-[2px]' href={`/member/${member.id}`}>
                    <div className='col-span-6 flex items-center '>
                      <span>{member.email}</span>
                    </div>

                    <div className='flex items-center '>
                      <span>{member.permission === 0 ? 'Owner' : "User"}</span>
                    </div>

                    <div className='flex gap-2 items-center'>
                      <button>Delete</button>
                      <span>/</span>
                      <button>Edit</button>
                    </div>
                  </Link>
                </div>
              ))}

            </div>

          </div>
        </div>
      </div >
    </>
  )
}
