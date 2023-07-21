import React from 'react'
import { Link } from 'react-router-dom'

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
} from '@chakra-ui/react'
const Navigation = () => {
	return (
		<Breadcrumb separator='-' color='black' fontSize='xl'>
			<Breadcrumb>
				<BreadcrumbItem>
					<BreadcrumbLink>
						<Link to="/">Page 1</Link>
					</BreadcrumbLink>
				</BreadcrumbItem>

				<BreadcrumbItem>
					<BreadcrumbLink>
						<Link to="/portfolio">Page 2</Link>
					</BreadcrumbLink>
				</BreadcrumbItem>

				<BreadcrumbItem isCurrentPage>
					<BreadcrumbLink>
						<Link to="/resume">Page3</Link>
					</BreadcrumbLink>
				</BreadcrumbItem>
			</Breadcrumb>
		</Breadcrumb>
	)
}
export default Navigation