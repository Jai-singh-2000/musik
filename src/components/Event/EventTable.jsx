import yuiImage from "../../assets/images/yui.png"
import bobImage from "../../assets/images/bob.png"
import emmaImage from "../../assets/images/emma.png"
import sashaImage from "../../assets/images/sasha.png"
import dianaImage from "../../assets/images/diana.png"
import PreviewButton from './PreviewButton'
import LiveButton from './LiveButton'
import UpcomingButton from './UpcomingButton'


const EventTable = () => {
    return (
        <div className='mt-20 border divide-y divide-gray-200'>
            <TableHeading />
            <TableRow time='11:00 AM to 12:00 PM' content='Vestibulum vel eros vel metus lacinia feugiat a nec metus.' button={<PreviewButton />}>
                <Speaker image={yuiImage} name={"Yui Ronald"} booth={"2F12"} />
            </TableRow>

            <TableRow time='12:00 PM to 03:00 PM' content='Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae, fringilla id magna. Vestibulum ornare eget urna nec pulvinar. Praesent porttitor convallis blandit. Fusce vel egestas dolor. Donec eu augue enim. Donec rutrum non lacus ac rhoncus. Morbi quis luctus leo, nec cursus ex.' image={bobImage} button={<LiveButton />}>
                <>
                    <Speaker image={bobImage} name={"Bob John"} booth={"3g12"} />
                    <Speaker image={yuiImage} name={"Yui Ronald"} booth={"2F12"} />
                    <Speaker image={emmaImage} name={"Emma Satoshi"} booth={"2a35"} />
                </>
            </TableRow>

            <TableRow time='03:00 PM to 04:00 PM' content='Vestibulum vel eros vel metus lacinia feugiat a nec metus.' image={bobImage} button={<UpcomingButton />}>
                <>
                    <Speaker image={sashaImage} name={"Sasha Jackson"} booth={"2F18"} />
                    <Speaker image={dianaImage} name={"Diana Brock"} booth={"2F24"} />
                </>
            </TableRow>

        </div>
    )
}


export default EventTable



const Speaker = ({ image, name, booth }) => {
    return (
        <div className='flex gap-2'>
            <img src={image} className='size-[56px] rounded-full' />
            <div className='text-[16px] leading-[24px]'>
                <div className=' font-bold '>{name}</div>
                <div className='text-[#949396]'>Booth: <span className='font-bold text-[#8e8d90] uppercase'>{booth}</span></div>
            </div>
        </div>
    )
}

const TableHeading = () => {
    return (
        <div className='grid grid-cols-12 bg-[#efecfc] text-[24px] font-semibold leading-[38px] p-8 rounded-t-xl'>
            <div className='col-span-3'>Time</div>
            <div className='col-span-4'>Content</div>
            <div className='col-span-5'>Speakers</div>
        </div>
    )
}

const TableRow = ({ time = "", content = "", button, children }) => {
    return (
        <div className='grid grid-cols-12 p-8'>
            <div className='col-span-3 text-[16px] leading-[24px] text-[#222222] '>{time}</div>
            <div className='col-span-4 text-[16px] leading-[24px] text-[#222222] font-bold w-[95%]'>{content}</div>
            <div className='col-span-3 flex flex-col gap-2 justify-center'>
                {
                    children
                }
            </div>
            <div className='col-span-2 flex justify-center'>
                {
                    button
                }
            </div>
        </div>
    )
}