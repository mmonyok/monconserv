import {
	Divider,
	HStack,
	Icon,
	ListItem,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Text,
	UnorderedList,
} from '@chakra-ui/react';
import { appColors } from '../config/constants';
import { McsLogo } from '../config/icons';

export const WelcomeModal = ({ isOpen, onClose }) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose} isCentered rounded>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader
					pb='10px'
					borderTopRadius='5px'
					borderBottom={`4px solid ${appColors.PRIM_BLUE}`}
				>
					<HStack>
						<Icon as={McsLogo} height={42} width={75} />
						<Text textAlign='center' w='100%' fontSize='30px'>
							Now Hiring!
						</Text>
						<ModalCloseButton size='lg' />
					</HStack>
				</ModalHeader>
				<ModalBody>
					<UnorderedList mx={0} px={0} styleType='none' spacing={0}>
						<ListItem fontWeight={600}>Hiring (Full/Part Time):</ListItem>
						<UnorderedList
							mx={0}
							ms='10px'
							mb='10px'
							px={0}
							styleType='none'
							spacing={0}
						>
							<ListItem>- Day Laborer</ListItem>
							<ListItem>- Concrete Finisher</ListItem>
						</UnorderedList>
						<ListItem fontWeight={600} mb='10px'>
							Seasonal: May - November
						</ListItem>
						<ListItem fontWeight={600}>Starting Wage: $25 per hour</ListItem>
						<UnorderedList
							mx={0}
							ms='10px'
							mb='10px'
							px={0}
							styleType='none'
							spacing={0}
						>
							<ListItem>- Rate goes up with experience.</ListItem>
							<ListItem>- On-Site Training available.</ListItem>
						</UnorderedList>
						<Divider my='10px' />
						<ListItem fontWeight={600}>Contact Joe for more info:</ListItem>
						<UnorderedList mx={0} ms='10px' px={0} styleType='none' spacing={0}>
							<ListItem>
								-{' '}
								<a className='contactLink fontLight' href='tel:9524923671'>
									<i
										className='fas fa-mobile-alt contactIcons'
										id='phoneIcon'
									></i>
									952-492-3671
								</a>
							</ListItem>
							<ListItem>
								-{' '}
								<a
									className='contactLink fontLight'
									href='mailto:joemonyok@outlook.com'
								>
									<i className='far fa-envelope me-2 contactIcons'></i>
									joemonyok@outlook.com
								</a>
							</ListItem>
						</UnorderedList>
					</UnorderedList>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};
